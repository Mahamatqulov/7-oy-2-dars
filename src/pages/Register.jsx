import React, { useEffect } from "react";
import { Link, useActionData, Form } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import FormInput from "../components/FormInput";
import useRegister from "../hooks/useRegister";

export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  return { displayName, email, password };
};

function Register() {
  const { registerWithEmailAndPassword } = useRegister();
  const data = useActionData();

  useEffect(() => {
    const registerUser = async () => {
      if (data) {
        if (!data.email || !data.password || !data.displayName) {
          toast.error("Barcha maydonlarni to'ldirish shart!");
          return;
        }

        try {
          await registerWithEmailAndPassword(
            data.displayName,
            data.email,
            data.password
          );
          toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz! 👌");
          return;
        } catch (error) {
          toast.error("Xato yuz berdi. Iltimos, qayta urinib ko'ring. 🤯");
          return;
        }
      }
    };

    registerUser();
  }, [data, registerWithEmailAndPassword]);

  return (
    <div className="mx-auto h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/img/rasm18.jpeg')]">
      <ToastContainer />
      <div className="mx-auto max-w-[500px] p-5 place-items-center font-bold relative top-[50px] backdrop-blur-xl">
        <Form action="" method="post">
          <h2 className="text-4xl text-center mb-5">Register</h2>

          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            label="Name"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
          />

          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
          />

          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
          />

          <FormInput
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            label="Repeat Password"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
          />

          <button
            type="submit"
            className="btn btn-primary btn-block mt-5 rounded-2xl py-2 bg-blue-500 text-white"
          >
            Register
          </button>

          <div className="text-center mt-5">
            <p>
              If you have an account,
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
