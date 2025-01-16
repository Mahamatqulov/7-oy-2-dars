import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import ProjectFilter from "../components/ProjectFilter";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [filter, setFilter] = useState("all");
  const { documents } = useCollection("projects");
  const { user } = useSelector((store) => store.user);

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const projects = documents
    ? documents.filter((doc) => {
        switch (filter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            doc.assignedUsers.forEach((u) => {
              if (u.id === user.uid) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "frontend":
          case "backend":
          case "smm":
          case "design":
            return doc.projectType == filter;
          default:
            return true;
        }
      }) || []
    : null;
  console.log(projects);

  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-4xl font-bold text-blue-500 mb-10">Dashboard</h1>
      <ProjectFilter changeFilter={changeFilter} />
      <div role="tablist" className="tabs tabs-bordered mb-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {projects &&
          projects.map((doc) => {
            return (
              <Link
                to={`/about/${doc.id}`}
                key={doc.id}
                className="group card bg-gradient-to-b from-slate-900 shadow-lg rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
              >
                <div className="card-body p-6">
                  <h2 className="card-title text-2xl font-semibold text-gray-300 group-hover:text-blue-500 mb-4 transition-colors">
                    {doc.name}
                  </h2>

                  <p className="text-gray-400 mb-4">
                    Due Date:
                    <span className="font-medium text-blue-400 ml-2">
                      {new Date(doc.dueTo.toDate()).toLocaleDateString()}
                    </span>
                  </p>
                  <hr className="border-gray-600 mb-4" />

                  <div className="flex -space-x-4">
                    {doc.assignedUsers.map((u) => (
                      <div
                        key={u.photoURL}
                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-blue-400"
                      >
                        <img
                          src={u.photoURL}
                          alt={`${u.name} avatar`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
