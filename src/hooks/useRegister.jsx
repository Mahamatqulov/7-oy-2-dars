import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";

export default function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailAndPassword = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (profile) => {
        dispatch(login(profile.user));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return { registerWithEmailAndPassword };
}
