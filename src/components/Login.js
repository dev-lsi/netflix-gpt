import React from "react"
import s from "./Login.module.css";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useRef} from "react";
import { Link,useNavigate} from "react-router-dom";
import { validateInputs } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";


const Login = () => {

  const userRedux = useSelector((state)=>state.user)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validatorData, setValidatorData] = useState({});
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);
  const [isRepassValid, setIsRepassValid] = useState(false);
  const [errorInfo,setErrorInfo]=useState("");

  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);
  const repass = useRef(null);
  const errorElement = useRef(null);

  function handleSubmit() {
    

    validateInputs(isSignInForm, setValidatorData, setIsNameValid, setIsEmailValid, setIsPassValid, setIsRepassValid, name, email, pass, repass);
    
    if (Object.keys(validatorData).length === 0) {
      if (!isSignInForm) {
        //Sign Up
        createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
          .then((userCredential) => {
            // Signed Up is managed by onAuthStateChanged in App.js
          })
          .catch((error) => {
            setErrorInfo(error.message);
          });
      } else {
        //Sign In............
        signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
          .then((userCredential) => {
            // Signed In is managed by onAuthStateChanged in App.js
          })
          .catch((error) => {
            setErrorInfo(error.message);
          });
      }
    }
  }

  return (
    <div className={s["login"]}>
      <Header />
      <div className={s["login-layout"]}>
        

        <form onSubmit={(e) => e.preventDefault()}>
          <h4>{isSignInForm ? "Sign In" : "Sign Up"}</h4>
          {
            !isSignInForm &&
            <input ref={name} className={s["form-input"] + " basis-[100%]"} type="text" placeholder="Name" name="name" />
          }
          <p className=" text-[0.9em] text-red-500 mt-[-1em]">{!validatorData.name ? "*" : validatorData.name}</p>


          <input ref={email} className={s["form-input"]} type="text" placeholder="Email" name="email" />
          <p className=" text-[0.9em] text-red-500 mt-[-1em]">{!validatorData.email ? "*" : validatorData.email}</p>

          <input ref={pass} className={s["form-input"]} type="password" placeholder="Password" name="pass" />
          <p className=" text-[0.9em] text-red-500 mt-[-1em]">{!validatorData.pass ? "*" : validatorData.pass}</p>

          {
            !isSignInForm &&
            <input ref={repass} className={s["form-input"]} type="password" placeholder="Repeat Password" name="repass" />
          }
          <p className=" text-[0.9em] text-red-500 mt-[-1em]">{!validatorData.repass ? "*" : validatorData.repass}</p>

          <button onClick={handleSubmit}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p 
            ref={errorElement} 
            className=" text-[0.9em] text-red-500 mt-[-1em]"
          >
            {errorInfo}
          </p>

          <h6 className={s["or"]}>OR</h6>

          <Link to="/reset-password">
            <p className={s["forgot-password"]}>Forgot password?</p>
          </Link>

          <p className={s["new-to-nf"]}>{isSignInForm ? "New to Netflix?" : "Already Have an account?"}
            <span
              onClick={() => {
                setIsSignInForm(!isSignInForm);
              }} className={s["new-to-nf-span"]}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>


          <p className={s["capcha"]}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login;

