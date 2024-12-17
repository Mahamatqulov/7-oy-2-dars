import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Login() {
  return (
    <div className="mx-auto] h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/img/rasm4.jpeg')]">
      <div className="flex items-center mx-auto h-[550px] max-w-xl rounded-full place-items-center w-full font-bold relative top-[90px] backdrop-blur-md">
        <form className="max-w-96 mx-auto w-full bg-inherit">
          <h2 className="text-4xl text-center mb-5">Login</h2>
          <FormInput type="email" placeholder="Email" label="Email" />
          <FormInput type="password" placeholder="Password" label="Password" />
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
