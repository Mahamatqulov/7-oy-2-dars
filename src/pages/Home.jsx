import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
function Home() {
  const { documents } = useCollection("projects");

  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {documents &&
          documents.map((doc) => {
            return (
              <Link
                to={`/about/${doc.id}`}
                key={doc.id}
                className="card bg-inherit w-full shadow-lg rounded-lg border border-blue-500 overflow-hidden"
              >
                <div className="card-body p-6">
                  <h2 className="card-title text-xl font-semibold text-gray-400 mb-4">
                    {doc.name}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Due Date:
                    <span className="font-medium text-blue-600">
                      {new Date(doc.dueTo.toDate()).toLocaleDateString()}
                    </span>
                  </p>
                  <hr className="" />
                  <div className="avatar-group -space-x-6 rtl:space-x-reverse ">
                    {doc.assignedUsers.map((u) => {
                      return (
                        <div key={u.photoURL} className="avatar border-none">
                          <div className="w-12">
                            <img src={u.photoURL} />
                          </div>
                        </div>
                      );
                    })}
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
