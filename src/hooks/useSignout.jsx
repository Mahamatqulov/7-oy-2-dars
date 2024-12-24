import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";

export const useSignout = () => {
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon :)");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return { userSignout };
};
