import { auth } from "../utils/firebase"
import {signOut } from "firebase/auth";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';



const Browse = () => {
  const [errorInfo,setErrorInfo]= useState("");
  const user = useSelector((state)=>state.user)
   
  function handleSignOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate('/login');

    }).catch((error) => {
      // An error happened.
      setErrorInfo(error.message);
    });
  }



  return (
    user&&
    <div>
      <h1>Browse Page</h1>
      <h2>{user.email}</h2>
      <button onClick={handleSignOut}>Log Out</button>
      <p>{errorInfo}</p>
    </div>
  )
}

export default Browse
