import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Browse from "../components/Browse";
import Home from "../components/Home";
import Login from "../components/Login";
import ResetPassword from "../components/ResetPassword";

export const router = createBrowserRouter([
  { path:'/',
    element:<App/>,
    children:[
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
  ]}
]);