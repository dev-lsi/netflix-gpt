import Browse from "./Browse";
import Home from "./Home";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
