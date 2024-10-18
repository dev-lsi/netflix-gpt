import { useEffect } from "react";
import { Outlet,useNavigate} from "react-router-dom";
import { deleteUser, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch,useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";



const Body = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      console.log('Hello from AUTH')
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //console.log(user)
        //const {uid,email,displayName} = user;
        // dispatch(addUser({uid: uid,email:email,displayName:displayName}))
        // navigate("browse")
        // ...
      } else {
        // User is signed out
        // ...
        //dispatch(deleteUser())
      }
    });
  },[auth]);

  return <Outlet/>;
};

export default Body;
