import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import ProtectedRouter from "./components/ProtectedRouter";

import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

function App() {
  const user = false;
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter user={user}>
          <MainLayout />
        </ProtectedRouter>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
