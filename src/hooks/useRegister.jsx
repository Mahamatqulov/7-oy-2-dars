import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";

import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { v4 as uuid } from "uuid";

export default function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailAndPassword = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (profile) => {
        await updateProfile(auth, currentUser, {
          displayName: displayName,
          photoURl: "https://api.decebear.com/9.x/dylan/svg/?seed=" + uuid(),
        });

        dispatch(login(profile.user));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return { registerWithEmailAndPassword };
}
