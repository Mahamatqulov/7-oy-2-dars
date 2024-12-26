import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

function useFirestore() {
  const addDocument = async (collectionName, data) => {
    try {
      await addDoc(collection(db, collectionName), data);
      toast.success("Project added");
    } catch (error) {
      toast.error(error.code);
    }
  };
  return { addDocument };
}

export { useFirestore };
