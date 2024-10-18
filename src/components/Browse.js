import { auth } from "../utils/firebase"
import {signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Browse = () => {
   const [errorInfo,setErrorInfo]= useState("");
   const navigate = useNavigate();
   
  function handleSignOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/login');

    }).catch((error) => {
      // An error happened.
      setErrorInfo(error.message);
    });
  }



  return (
    <div>
      <h1>Browse Page</h1>
      <h2>{auth.currentUser.email}</h2>
      <button onClick={handleSignOut}>Log Out</button>
      <p>{errorInfo}</p>
    </div>
  )
}

export default Browse
