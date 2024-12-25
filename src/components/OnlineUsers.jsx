import React from "react";
import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  useCollection("users");
  return <div className="w-[200px] bg-blue-400 p-10">OnlineUsers</div>;
}

export default OnlineUsers;
