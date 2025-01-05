import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { useState } from "react";

function useFirestore(collectionName) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const addDocument = async (data) => {
    setIsPending(true);
    try {
      await addDoc(collection(db, collectionName), data);
      toast.success("Project added");
    } catch (error) {
      toast.error(error.code);
      setError(error.code);
    } finally {
      setIsPending(false);
    }
  };
  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      toast.success("Document successfully deleted!");
    } catch (error) {
      toast.error("Error removing document: ", error);
    } finally {
      navigate("/");
    }
  };
  const updateDocument = async (document, id) => {
    setIsPending(true);
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, document);
    } catch (error) {
      toast.error(error.code);
      setError(error.code);
    } finally {
      setIsPending(false);
    }
  };
  return { addDocument, updateDocument, deleteDocument, isPending, error };
}

export { useFirestore };
