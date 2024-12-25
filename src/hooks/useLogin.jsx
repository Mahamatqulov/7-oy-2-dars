import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const loginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((profile) => {
        dispatch(login(profile.user));
        toast.success(`Welcome back, ${profile.user.displayName}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return { loginWithEmailAndPassword };
};
