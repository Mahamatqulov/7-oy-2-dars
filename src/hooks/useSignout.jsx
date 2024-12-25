import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { updateDoc } from "firebase/firestore";

export function useSignout() {
  const { user } = useSelector((store) => store.user);
  const userSignout = async () => {
    let ref = doc(db, "users", user.uid);
    await updateDoc(ref, {
      online: false,
    });
    signOut(auth)
      .then(() => {
        toast.success("See you soon :)");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return { userSignout };
}
