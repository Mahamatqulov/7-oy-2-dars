import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useState } from "react";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

export function useAuthWithGoogle() {
  const [isPending, setIsPending] = useState(false);
  const provider = new GoogleAuthProvider();
  const googleAuth = async () => {
    setIsPending(true);
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        photoURL: user.photoURL,
        id: user.uid,
        online: true,
      });
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };
  return { googleAuth, isPending };
}
