import { useParams } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
import { useState, useEffect } from "react";
import { doc, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { VscSend } from "react-icons/vsc";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

function About() {
  const [project, setProject] = useState(null);
  const { user } = useSelector((store) => store.user);
  const [content, setContent] = useState("");
  const { deleteDocument, updateDocument } = useFirestore("projects");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("Foydalanuvchi ma'lumotlari topilmadi!");
      return;
    }

    const message = {
      id: uuidv4(),
      content,
      createdAt: Timestamp.fromDate(new Date()),
      owner: {
        displayName: user.displayName,
        photoURL: user.photoURL,
        id: user.uid,
      },
    };

    const existingComments = project.comments || [];
    await updateDocument(
      {
        comments: [...existingComments, message],
      },
      id
    );

    setContent("");
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "projects", id), (doc) => {
      if (doc.exists()) {
        setProject(doc.data());
      } else {
        console.error("Hujjat topilmadi!");
      }
    });

    return () => unsubscribe();
  }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="card bg-gradient-to-b from-slate-900 to-slate-800 text-neutral-content w-[350px] mt-5">
        <div className="card-body">
          <h2 className="card-title text-2xl">{project.name}</h2>
          <h3 className="text-x italic font-extrabold">
            {project.projectType}
          </h3>
          <p className="w-full p-2 bg-slate-500 text-black rounded-md mt-5">
            {project.description}
          </p>
          <hr />
          <div className="card-actions flex justify-end gap-3">
            <button
              className="py-2 px-4 mt-4 bg-blue-600 text-white rounded-lg font-semibold text-sx shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              type="button"
              onClick={() => updateDocument({ completed: true }, id)}
            >
              Completed
            </button>
            <button
              className="py-2 px-4 mt-4 bg-blue-600 text-white rounded-lg font-semibold text-sx shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              type="button"
              onClick={() => deleteDocument(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-5 p-2 bg-gradient-to-b from-slate-600 rounded-2xl max-h-[350px] overflow-x-auto">
        <h1 className="text-center text-3xl font-medium mb-10">Chat</h1>
        {project.comments && project.comments.length === 0 ? (
          <h4 className="text-center my-10 italic opacity-50">
            No Comment Yet
          </h4>
        ) : (
          project.comments.map((comment) => (
            <div
              key={comment.id}
              className={`chat ${
                user.uid === comment.owner.id ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt={`${comment.owner.displayName}'s avatar`}
                    src={comment.owner.photoURL}
                  />
                </div>
              </div>
              <div className="chat-header">
                {comment.owner.displayName}
                <time className="text-xs opacity-50 m-2">
                  {new Date(
                    comment.createdAt.seconds * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </div>
              <div className="chat-bubble">{comment.content}</div>
            </div>
          ))
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Message:</span>
            </div>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="textarea textarea-bordered h-24"
              placeholder="Message"
              required
            ></textarea>
          </label>
          <button className="btn btn-primary btn-block text-xl flex items-center gap-3">
            Send <VscSend />
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
