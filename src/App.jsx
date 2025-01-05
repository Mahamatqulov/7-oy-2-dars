import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Create from "./pages/Create";
import MainLayout from "./layout/MainLayout";
import ProtectedRouter from "./components/ProtectedRouter";
import About from "./pages/About";
import Settings from "./pages/Settings";

import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { action as CreateAction } from "./pages/Create";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authReadyAct, login } from "./app/features/userSlice";
import { auth } from "./firebase/config";

function App() {
  const dispatch = useDispatch();
  const { user, authReady } = useSelector((store) => store.user);
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
        {
          path: "/create",
          element: <Create />,
          action: CreateAction,
        },
        {
          path: "/about/:id",
          element: <About />,
        },
        {
          path: "/settings",
          element: <Settings />,
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(authReadyAct());
    });
  }, []);

  return <> {authReady && <RouterProvider router={router} />}</>;
}

export default App;
