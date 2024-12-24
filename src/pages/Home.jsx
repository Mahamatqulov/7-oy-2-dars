import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return (
      <div className="p-10">
        <h2>
          Foydalanuvchilar ma'lumotlari mavjud emas. Iltimos, qayta kirib
          ko'ring.
        </h2>
      </div>
    );
  }

  return (
    <div className="align-elements">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="avatar online mx-auto">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img
              src={
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="Avatar"
            />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Welcome, {user.displayName}</h2>
          <h2 className="card-description">Email: {user.email}</h2>
          <h2 className="card-password">Password: ********</h2>

          <Link
            to="/home"
            className="btn text-2xl font-medium btn-outline btn-primary btn-block"
          >
            Home
          </Link>
          <Link
            to="/project"
            className="btn text-2xl font-medium btn-outline btn-success btn-block"
          >
            Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
