import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { addUser,removeUser } from "./utils/userSlice";


function App() {
  //const [currUser,setCurrUser]=useState(null);
  const navigate = useNavigate();
  const userDataInMyStore = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid: uid,email:email,displayName:displayName}));
        navigate("browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("login");
      }
    });
  },[]);

  return <Outlet/>
}

export default App;
