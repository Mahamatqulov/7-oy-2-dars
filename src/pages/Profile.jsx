import { useSelector } from "react-redux";
import FormInput from "../components/FormInput";
import { Form } from "react-router-dom";

function Profile() {
  const { user } = useSelector((store) => store.user);
  return (
    <div>
      <div className="mt-5 max-w-100 w-full h-[600px] bg-info-to-p from-slate-800 to-slate-600 shadow-lg rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-xl text-white font-semibold">
            {user.displayName}
          </h1>
        </div>

        <div className="relative bg-gradient-to-b from-slate-900 rounded-lg h-44 flex justify-center items-center mb-6">
          <div className="absolute  w-36 h-36 bg-pink-300 rounded-full border-4 border-white ">
            <img
              src={user.photoURL}
              alt=""
              className="absolute  w-full rounded-full"
            />
          </div>
        </div>

        <div className="w-full m-5 mt-20">
          <Form method="post">
            <FormInput
              type="text"
              name="name"
              placeholder="Name"
              label="Name"
              className="w-full p-2 border border-blue-300 rounded-2xl mt-3 bg-inherit"
            />

            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              className="w-full p-2 border border-blue-300 rounded-2xl mt-3 bg-inherit"
            />
          </Form>{" "}
          <div className="text-center mt-[30px] max-w-[380px]">
            <button
              type="btn"
              className=" btn-block  bg-gray-100 border border-gray-300 text-gray-700 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
