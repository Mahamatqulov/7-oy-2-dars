import React from "react";
import { useRouteError } from "react-router-dom";

function PageNotFound() {
  const error = useRouteError();

  if (error && error.ststus == 404) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-5xl font-medium"> Page not Found</h2>
          <Link to="/" className="btn btn-success">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-5xl font-medium"> Page not Found</h2>
        <Link to="/" className="btn btn-success">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
