import {
  collection,
  updateDoc,
  deleteDoc,
  addDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useFirestore(collectionName) {
  const navigate = useNavigate();
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
      navigate("/");
    } catch (error) {
      toast.error("Error removing document: ", error);
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

// import {
//   collection,
//   updateDoc,
//   deleteDoc,
//   addDoc,
//   doc,
// } from "firebase/firestore";
// import { db } from "../firebase/config";
// import { toast } from "react-toastify";
// import { useReducer } from "react";

// const document = {
//   document: null,
//   isPending: false,
//   error: null,
//   success: false,
// };

// const changeState = (state, action) => {
//   switch (action.type) {
//     case "IS_PENDING":
//       return { ...state, isPending: true, error: null, success: false };
//     case "ADD_SUCCESS":
//     case "UPDATE_SUCCESS":
//     case "DELETE_SUCCESS":
//       return { ...state, isPending: false, success: true, error: null };
//     case "ERROR":
//       return {
//         ...state,
//         isPending: false,
//         error: action.payload,
//         success: false,
//       };
//     default:
//       return state;
//   }
// };

// function useFirestore(collectionName) {
//   const [state, dispatch] = useReducer(changeState, document);

//   const addDocument = async (data) => {
//     dispatch({ type: "IS_PENDING" });
//     try {
//       await addDoc(collection(db, collectionName), data);
//       toast.success("Project added");
//       dispatch({ type: "ADD_SUCCESS" });
//     } catch (error) {
//       toast.error(error.code);
//       dispatch({ type: "ERROR", payload: error.code });
//     }
//   };

//   const deleteDocument = async (id) => {
//     dispatch({ type: "IS_PENDING" });
//     try {
//       await deleteDoc(doc(db, collectionName, id));
//       toast.success("Document successfully deleted!");
//       dispatch({ type: "DELETE_SUCCESS" });
//     } catch (error) {
//       toast.error(`Error removing document: ${error.message}`);
//       dispatch({ type: "ERROR", payload: error.message });
//     }
//   };

//   const updateDocument = async (document, id) => {
//     dispatch({ type: "IS_PENDING" });
//     try {
//       const docRef = doc(db, collectionName, id);
//       await updateDoc(docRef, document);
//       toast.success("Document updated successfully!");
//       dispatch({ type: "UPDATE_SUCCESS" });
//     } catch (error) {
//       toast.error(error.code);
//       dispatch({ type: "ERROR", payload: error.code });
//     }
//   };

//   return { addDocument, updateDocument, deleteDocument, ...state };
// }

// export { useFirestore };
