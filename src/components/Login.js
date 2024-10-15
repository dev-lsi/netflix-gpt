import React from "react"
import s from "./Login.module.css";
import Footer from "./Footer";
import Header from "./Header";
import {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);
  
  function handleSubmit(){
    console.log("submited!")
  }

  return (
    <div className={s["login"]}>
       <Header/>
       <div className={s["login-layout"]}>
        <form onSubmit={handleSubmit}>
                <h4>{"Sign In"}</h4>
                <input className={s["form-input"]} type="text" placeholder="email"/>

                <input className={s["form-input"]} type="password" placeholder="password"/>

                <input className={s["form-input"] + " " + s[isSignInForm?"hidden":"visible"]} type="password" placeholder="repeat password"/>

                <button>{isSignInForm?"Sign In":"Sign Up"}</button>

                <h6 className={s["or"]}>OR</h6>

                <Link to="/reset-password">
                    <p className={s["forgot-password"]}>Forgot password?</p>
                </Link>
                
                <p className={s["new-to-nf"]}>{isSignInForm?"New to Netflix?":"Already Have an account?"}
                  <span 
                    onClick={()=>{
                      setIsSignInForm(!isSignInForm);
                    }} className={s["new-to-nf-span"]}
                  >
                    {isSignInForm?"Sign up now.":"Sign in now."}
                  </span>
                </p>

                <p className={s["capcha"]}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
        </form>
       </div>
       <Footer/>
    </div>
  )
}

export default Login;

