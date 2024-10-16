import React from "react"
import s from "./Login.module.css";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { validateInputs } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validatorData, setValidatorData] = useState({});
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);
  const [isRepassValid, setIsRepassValid] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);
  const repass = useRef(null);

  function handleSubmit() {
    console.log(name)
    console.log(email)
    console.log(pass)
    console.log(repass)

    validateInputs(isSignInForm, setValidatorData, setIsNameValid, setIsEmailValid, setIsPassValid, setIsRepassValid, name, email, pass, repass);
    console.log(validatorData)
    if (Object.keys(validatorData).length === 0) {
      
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+": "+errorMessage)
          // ..
        });
      submitForm(validatorData);
    }

  }


  function submitForm(validatoData) {
    console.log("Form Data Submitted");
    console.log(validatorData)

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

