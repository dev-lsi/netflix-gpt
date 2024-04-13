import { backgroundURL} from "../utils/constants";
import Header from "./Header";
import { useState } from "react";

const Login=()=>{

  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <img className=" h-lvh w-full" src={backgroundURL} alt="bkg"/>
        <form
         className=" py-10 form absolute flex flex-col flex-wrap z-10 top-20 mx-auto left-0  right-0  gap-8 px-16 bg-black bg-opacity-80  justify-center text-white">
          <h1 className="font-bold text-4xl">{isSignInForm?"Sign In":"Sign Up"}</h1>

          {!isSignInForm && (
            <input type="text" placeholder="Name" 
            className=" form-input p-2 rounded-sm bg-slate-800 bg-opacity-80 border-solid  border-slate-500 border-2"/>
          )}

          <input type="text" placeholder="Email" 
            className=" form-input p-2 rounded-sm bg-slate-800 bg-opacity-80 border-solid  border-slate-500 border-2"/>

          <input type="password" placeholder="Password" 
            className=" form-input p-2 rounded-sm bg-slate-800 bg-opacity-80 border-solid  border-slate-500 border-2"/>

          <button type="submit" className=" w-full bg-red-700 py-2 px-6 mx-auto left-0 right-0 rounded-sm font-bold">{isSignInForm?"Sign In":"Sign Up"}</button>

          <p className="hover:text-slate-400 hover:cursor-pointer hover:underline text-center font-semibold">Forgot password?</p>
         
          <div className="flex flex-nowrap justify-start gap-2">
            <input type="checkbox" className="check-box"/>
            <h2>Remember me</h2>
          </div>

          <div className="flex flex-nowrap gap-2">
            <span className="text-slate-400">{isSignInForm?"New to Netflix?":"Already registered?"}</span>
            <span className="hover:underline hover:cursor-pointer" onClick={toggleForm}>
              {isSignInForm ? "Sign Up" : "Sign In" }
            </span> 
          </div>
          

          <p className=" text-sm text-slate-400">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className=" text-blue-700 bg-opacity-100 hover:underline hover:cursor-pointer font-semibold">Learn more.</span></p>
        </form>
    </div>
    
  )
}
//0, 113, 235
export default Login;