import React from "react";
import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { documents } = useCollection("users");
  return (
    <div className="max-w-[340px] w-fulls bg-gray-900 p-10">
      <h1 className="text-center text-3xl font-medium text-blue-500 mb-10">
        Online Users
      </h1>
      <ul>
        {documents &&
          documents.map((doc) => {
            return (
              <li key={doc.id}>
                <div className="flex items-center mb-3 gap-3  btn-outline btn-info rounded-full">
                  <div className="avatar w-[30px]">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 online placeholder">
                      <img src={doc.photoURL} />
                    </div>
                  </div>
                  <p>{doc.displayName}</p>
                  <p>{doc.online ? "on" : "off"}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default OnlineUsers;
