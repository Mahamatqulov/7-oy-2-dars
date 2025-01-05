import React, { useEffect, useState } from "react";
import { Link, useActionData, Form } from "react-router-dom";
import FormInput from "../components/FormInput";
import useRegister from "../hooks/useRegister";
import { validateSignupOrLoginData } from "../utils";

export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  const confirmPassword = form.get("confirmPassword");
  return { displayName, email, password, confirmPassword };
};

function Register() {
  const [error, setError] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { registerWithEmailAndPassword } = useRegister();
  const signupActionData = useActionData();
  useEffect(() => {
    if (signupActionData) {
      const { valid, errors } = validateSignupOrLoginData(
        signupActionData,
        true
      );
      if (valid) {
        const { displayName, email, password } = signupActionData;
        registerWithEmailAndPassword(displayName, email, password);
      } else {
        setError(errors);
      }
    }
  }, [signupActionData]);

  return (
    <div className="mx-auto h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/img/rasm18.jpeg')]">
      <div className="mx-auto max-w-[500px] p-5 place-items-center font-bold relative top-[50px] backdrop-blur-xl">
        <Form action="" method="post">
          <h2 className="text-4xl text-center mb-5">Register</h2>

          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            label="Name"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
            error={error.displayName && "input-error"}
            errorText={error.displayName}
          />

          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
            error={error.email && "input-error"}
            errorText={error.email}
          />

          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
            error={error.password && "input-error"}
            errorText={error.password}
          />

          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="Repeat Password"
            label="Repeat Password"
            className="w-full p-2 border border-blue-300 rounded-2xl mt-5 bg-inherit"
            error={error.confirmPassword && "input-error"}
            errorText={error.confirmPassword}
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
