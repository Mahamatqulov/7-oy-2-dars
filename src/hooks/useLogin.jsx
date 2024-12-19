import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useLogin = () => {
  const loginWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (profile) => {
        console.log(profile.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return { loginWithEmailAndPassword };
};
