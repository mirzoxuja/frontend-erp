import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);
export default router;
