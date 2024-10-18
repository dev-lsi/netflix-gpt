import "./App.css";
import Browse from "../src/components/Browse";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import ResetPassword from "../src/components/ResetPassword";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Body from "../src/components/Body";

function App() {
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
  return <RouterProvider router={router} >
               <Body/>
         </RouterProvider>;
}

export default App;
