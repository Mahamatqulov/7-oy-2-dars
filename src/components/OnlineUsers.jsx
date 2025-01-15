import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { documents } = useCollection("users");
  return (
    <div className="max-w-sm w-full bg-gray-800 p-6 rounded-lg shadow-lg ">
      <h1 className="text-center text-2xl font-semibold text-blue-400 mb-6">
        Online Users
      </h1>
      <ul className="max-h-[620px] overflow-x-auto">
        {documents &&
          documents.map((doc) => {
            return (
              <li key={doc.id} className="mb-4">
                <div className="flex items-center gap-4 p-3 bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                  <div className="relative w-12 h-12">
                    <img
                      className="w-full h-full rounded-full ring-2 ring-blue-500"
                      src={doc.photoURL}
                      alt={`${doc.displayName}'s avatar`}
                    />
                    {doc.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-gray-800"></span>
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">{doc.displayName}</p>
                    <p
                      className={`text-sm ${
                        doc.online ? "text-green-400" : "text-gray-400"
                      }`}
                    >
                      {doc.online ? "Online" : "yaqinda online edi"}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default OnlineUsers;
