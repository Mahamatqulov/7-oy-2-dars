import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.warn("Fill in all the fields!");
      return;
    }

    if (formData.password.length <= 8) {
      toast.error("Password must not be less than 8 characters");
      return;
    }

    console.log(formData);
    toast.success("Registration is successful!");

    setFormData({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto] h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/img/rasm4.jpeg')]">
      <ToastContainer />
      <div className="flex items-center mx-auto h-[550px] max-w-xl rounded-full place-items-center w-full font-bold relative top-[90px] backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="max-w-96 mx-auto w-full bg-inherit"
        >
          <h2 className="text-4xl text-center mb-5">Login</h2>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="EmailName@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 text-white bg-inherit "
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
          />
          <button className="btn btn-primary btn-block mt-5">Login</button>
          <div className="text-center mt-5">
            <p>
              If you have accounter,
              <Link className="link link-primary" to="/Register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
