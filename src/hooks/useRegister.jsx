import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";
import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { doc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";

export default function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailAndPassword = async (displayName, email, password) => {
    let res = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: "https://api.dicebear.com/9.x/adventurer/svg?seed=" + uuid(),
    });

    await setDoc(doc(db, "users", res.user.uid), {
      displayName: res.user.displayName,
      photoURL: res.user.photoURL,
      id: res.user.uid,
      online: true,
    });
    console.log(res);

    dispatch(login(profile.user));
  };

  return { registerWithEmailAndPassword };
}
