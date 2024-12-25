import React from "react";
import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { documents } = useCollection("users");
  console.log(documents);
  return (
    <div className="w-[250px] bg-gray-700 p-10">
      <ul>
        {documents &&
          documents.map((doc) => {
            return (
              <li key={doc.id}>
                <div className="flex items-center mb-3 gap-3  btn-outline btn-info rounded-full">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 online placeholder">
                      <img src={doc.photoURL} />
                    </div>
                  </div>
                  <p>{doc.displayName}</p>
                  <p>{doc.online ? "online" : "offline"}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default OnlineUsers;
