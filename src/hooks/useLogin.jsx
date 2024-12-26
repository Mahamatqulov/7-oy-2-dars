import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { getAuthErrorMessage } from "../utils";

export const useLogin = () => {
  const dispatch = useDispatch();
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Failed to sign in. Please try again");
      }
      await setDoc(doc(db, "users", res.user.uid), {
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        id: res.user.uid,
        online: true,
      });
      dispatch(login(res.user));
      toast.success(`Welcome back ${res.user.displayName || "User"}!`);
    } catch (error) {
      toast.error(getAuthErrorMessage(error.code));
      toast.error(error.message);
    }
  };
  return { loginWithEmailAndPassword };
};
