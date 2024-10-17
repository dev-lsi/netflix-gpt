import { useEffect } from "react";
import Browse from "./Browse";
import Home from "./Home";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { deleteUser, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch,useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  
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

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid: uid,email:email,displayName:displayName}))
        navigate('browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(deleteUser())
        navigate('/')
      }
    });
  },[]);

  return <RouterProvider router={router} />;
};

export default Body;
