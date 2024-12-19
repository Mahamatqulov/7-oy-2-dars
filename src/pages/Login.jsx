import { Link, useActionData, Form } from "react-router-dom";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import FormInput from "../components/FormInput";
import useRegister from "../hooks/useRegister";

export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  return { email, password };
};
function Login() {
  const { registerWithEmailAndPassword } = useRegister();
  const data = useActionData();
  useEffect(() => {
    const registerUser = async () => {
      if (data) {
        if (!data.email || !data.password) {
          toast.error("Barcha maydonlarni to'ldirish shart!");
          return;
        }
        try {
          await registerWithEmailAndPassword(data.email, data.password);
          toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz! 👌");
        } catch (error) {
          toast.error("Xato yuz berdi. Iltimos, qayta urinib ko'ring. 🤯");
        }
      }
    };

    registerUser();
  }, [data, registerWithEmailAndPassword]);
  return (
    <div className="mx-auto h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/img/rasm11.jpeg')]">
      <ToastContainer />
      <div
        className="flex items-center mx-auto h-[550px] max-w-xl rounded-full place-items-center w-full font-bold relative top-[90px] backdrop-blur-2xl
      "
      >
        <Form
          action=""
          method="post"
          className="max-w-96 mx-auto w-full bg-inherit"
        >
          <h2 className="text-4xl text-center mb-5">Login</h2>
          <FormInput
            type="text"
            name="email"
            label="Email"
            placeholder="EmailName@gmail.com"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 text-white bg-inherit "
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
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
        </Form>
      </div>
    </div>
  );
}

export default Login;
