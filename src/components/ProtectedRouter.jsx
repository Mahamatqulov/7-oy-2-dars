import { Navigate } from "react-router-dom";

function ProtectedRouter({ user, children }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default ProtectedRouter;
