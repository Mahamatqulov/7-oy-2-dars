import React, { useEffect, useState } from "react";
import { Link, useActionData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// export const action = async ({ request }) => {
//   const form = await request.formData();
//   const displayName = form.get("name");
//   const email = form.get("email");
//   const password = form.get("password");
//   return { displayName, email, password };
// };
// function Register() {
//   const data = useActionData();
//   useEffect(() => {
//     if (data) {
//       console.log(data);
//     }
//   }, [data]);
// }

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.repeatPassword
    ) {
      toast.warn("Fill in all the fields!");
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (formData.password.length <= 8) {
      toast.error("Password should not be less than 8 characters");
      return;
    }

    console.log(formData);
    toast.success("Registration is successful!");

    setFormData({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
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
    <div className="mx-auto h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/img/rasm5.jpg')]">
      {" "}
      <ToastContainer />
      <div className=" mx-auto max-w-[500px] p-10 place-items-center font-bold relative top-[130px] backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="text-black">
          <h2 className="text-4xl text-center mb-5">Register</h2>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 text-white bg-inherit "
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
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

          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={formData.repeatPassword}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
          />

          <button
            type="submit"
            className="btn btn-primary btn-block mt-5 rounded-2xl py-2 bg-blue-500 text-white "
          >
            Register
          </button>
          <div className="text-center mt-5">
            <p>
              If you have accounter,
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
