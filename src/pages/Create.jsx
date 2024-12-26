import { Form, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import FormTextare from "../components/FormTextare";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { serverTimestamp } from "firebase/firestore";
import { useFirestore } from "../hooks/useFirestore";

const animatedComponents = makeAnimated();

export async function action({ request }) {
  const form = await request.formData();
  const name = form.get("name");
  const description = form.get("description");
  const dueTo = form.get("dueTo");
  return { name, description, dueTo };
}

const usersOptions = [
  { value: "user1", label: "User1" },
  { value: "user2", label: "User2" },
  { value: "user3", label: "User3" },
];

const projectTypes = [
  {
    value: "frontend",
    label: "Frontend",
  },
  {
    value: "Backend",
    label: "Backend",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "smm",
    label: "SMM",
  },
];

function Create() {
  const { addDocument } = useFirestore();
  const createActionData = useActionData();
  const [assignedUser, setAssignedUser] = useState([]);
  const [projectType, setProjectType] = useState([]);

  const selectUser = (user) => {
    setAssignedUser(user);
  };

  const selectProject = (type) => {
    setProjectType(type);
  };

  useEffect(() => {
    if (createActionData) {
      if (
        !createActionData.name ||
        !createActionData.description ||
        !createActionData.dueTo
      ) {
        toast.error("Barcha maydonlarni to'ldirish shart!");
        return;
      }
      toast.success("Loyiha muvaffaqiyatli qo'shildi!");
      addDocument("project", {
        ...createActionData,
        projectType,
        assignedUser,
        createdAt: serverTimestamp(new Date()),
      });
    }
  }, [createActionData, projectType, assignedUser]);
  return (
    <div className="">
      <h2 className="text-xl font-semibold">Create a new Project</h2>
      <Form method="post" className="flex flex-col gap-7 max-w-[400px]">
        <FormInput
          label="Project name"
          type="text"
          placeholder="write project name here"
        />
        <FormTextare label="Project description" />
        <FormInput label="Set due to" type="date" />
        <Select
          components={animatedComponents}
          isMulti
          options={projectTypes}
          onChange={selectUser}
        />
        <Select
          components={animatedComponents}
          options={usersOptions}
          isMulti
          onChange={selectProject}
        />

        <div className="flex justify-end">
          <button className="btn btn-primary">Add project</button>
        </div>
      </Form>
    </div>
  );
}

export default Create;
