// import { Form, useActionData, useNavigate } from "react-router-dom";
// import FormInput from "../components/FormInput";
// import FormTextare from "../components/FormTextare";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";
// import { useEffect, useState } from "react";
// import { serverTimestamp } from "firebase/firestore";
// import { Timestamp } from "firebase/firestore";
// import { useFirestore } from "../hooks/useFirestore";
// import { useCollection } from "../hooks/useCollection";

// const animatedComponents = makeAnimated();

// export async function action({ request }) {
//   const form = await request.formData();
//   const name = form.get("name");
//   const description = form.get("description");
//   const dueTo = Timestamp.fromDate(new Date(form.get("dueTo")));
//   return { name, description, dueTo };
// }

// const projectTypes = [
//   {
//     value: "frontend",
//     label: "Frontend",
//   },
//   {
//     value: "Backend",
//     label: "Backend",
//   },
//   {
//     value: "marketing",
//     label: "Marketing",
//   },
//   {
//     value: "smm",
//     label: "SMM",
//   },
//   {
//     value: "Dizayn",
//     label: "dizayn",
//   },
// ];

// function Create() {
//   const navigate = useNavigate();
//   const { addDocument } = useFirestore("project");
//   const { documents } = useCollection("users");
//   const createActionData = useActionData();
//   const [assignedUsers, setAssignedUsers] = useState([]);
//   const [projectType, setProjectType] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setUsers(
//       documents?.map((document) => {
//         return { value: { ...document }, label: document.displayName };
//       })
//     );
//   }, [documents]);

//   const selectUser = (user) => {
//     setAssignedUsers(user);
//   };

//   const selectProject = (type) => {
//     setProjectType(type.value);
//   };

//   useEffect(() => {
//     if (createActionData) {
//       addDocument("project", {
//         ...createActionData,
//         assignedUsers: assignedUsers.map((au) => au.value),
//         projectType,
//         createdAt: serverTimestamp(new Date()),
//       }).then(() => {
//         navigate("/");
//       });
//     }
//   }, [createActionData]);

//   return (
//     <div className="">
//       <h2 className="text-xl font-semibold">Create a new Project</h2>
//       <Form method="post" className="flex flex-col gap-7 max-w-[400px]">
//         <FormInput
//           label="Project name"
//           type="text"
//           name="name"
//           placeholder="write project name here"
//         />
//         <FormTextare label="Project description" name="description" />
//         <FormInput label="Set due to" type="date" name="dueTo" />
//         <Select
//           components={animatedComponents}
//           isMulti
//           options={projectTypes}
//           onChange={selectUser}
//         />
//         <Select
//           components={animatedComponents}
//           options={users}
//           isMulti
//           onChange={selectProject}
//         />

//         <div className="flex justify-end">
//           <button className="btn btn-primary">Add project</button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default Create;

import FormInput from "../components/FormInput";
import { Form, useActionData, useNavigate } from "react-router-dom";
import FormTextare from "../components/FormTextare";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { Timestamp } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useCollection } from "../hooks/useCollection";

const animatedComponents = makeAnimated();

export async function action({ request }) {
  const form = await request.formData();
  const name = form.get("name");
  const description = form.get("description");
  const dueTo = Timestamp.fromDate(new Date(form.get("dueTo")));

  return { name, description, dueTo };
}

const projectTypes = [
  { value: "smm", label: "SMM" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "design", label: "Design" },
];

function create() {
  const navigate = useNavigate();
  const { addDocument } = useFirestore("projects");
  const { documents } = useCollection("users");

  const createActionData = useActionData();
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [projectType, setProjectType] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(
      documents?.map((document) => {
        return {
          value: { ...document },
          label: document.displayName,
        };
      })
    );
  }, [documents]);

  const selectUser = (user) => {
    setAssignedUsers(user);
  };

  const selectProjectType = (type) => {
    setProjectType(type);
  };

  const handleValidation = () => {
    if (!createActionData?.name) {
      toast.error("Project name is required!");
      return false;
    }
    if (!createActionData?.description) {
      toast.error("Project description is required!");
      return false;
    }
    if (createActionData.description.length < 5) {
      toast.error("Project description must be at least 10 characters!");
      return false;
    }
    if (!createActionData?.dueTo) {
      toast.error("Due date is required!");
      return false;
    }
    if (assignedUsers.length === 0) {
      toast.error("Please assign at least one user!");
      return false;
    }
    if (projectType.length === 0) {
      toast.error("Please select at least one project type!");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (createActionData && handleValidation()) {
      addDocument({
        ...createActionData,
        assignedUsers: assignedUsers.map((au) => au.value),
        projectType: projectType.map((tt) => tt.value),
        createdAt: serverTimestamp(new Date()),
      });
      navigate("/");
    }
  }, [createActionData]);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "inherit",
      border: "2px solid #93c5fd",
      borderRadius: "10px",
    }),
  };

  return (
    <div className="">
      <h2 className="text-4xl font-semibold text-center mb-5 text-blue-600 ">
        Enter a project
      </h2>
      <Form method="post" className="flex flex-col gap-5 max-w-[400px">
        <FormInput
          name="name"
          label="Project Name"
          type="text"
          placeholder="Enter project name here"
        />
        <FormTextare label="Project Description" name="description" />
        <FormInput label="Set Due Date" type="date" name="dueTo" />

        <Select
          onChange={selectProjectType}
          options={projectTypes}
          isMulti
          components={animatedComponents}
          styles={customStyles}
        />

        <Select
          onChange={selectUser}
          options={users}
          isMulti
          components={animatedComponents}
          styles={customStyles}
        />

        <div className="flex justify-end">
          <button className="btn btn-primary">Add project</button>
        </div>
      </Form>
    </div>
  );
}

export default create;
