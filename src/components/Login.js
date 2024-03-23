import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login =()=>{
    
    const [formName, setFormName] = useState("Sign In");

    const toggleForm = () => {
        formName === "Sign In" ? setFormName("Sign Up"):setFormName("Sign In");
    }

    function getDisplayValue(){
       return formName==="Sign In"? "none" : "block";
    }

    function toggleActions(){
        return formName ==="Sign In"? signIn() : signUp();
    }

    function signIn(){
        console.log("Signed In Page");
    }

    function signUp(){
        console.log("Sign Up Page");
    }
   
    return <div className="">
        <Header/>
        <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a39b60f5-0445-42b3-ba28-76b0b79cc5ef/BG-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""/>
        
        <form className=" text-white p-4 m-4 w-1/3 bg-slate-950 flex flex-col absolute mx-auto left-0 right-0 my-auto top-0 bottom-0 border-solid rounded-lg h-fit py-20 bg-opacity-80">
            <h1 className="text-bold text-3xl px-4 py-1">{formName}</h1>

            {formName==="Sign Up"&&<input type="text " placeholder="Name" className="mx-4 my-3 px-1 py-3 rounded-lg w-11/12 bg-slate-700"/>}

            <input type="text" placeholder="Email" className="mx-4 my-3 px-1 py-3 rounded-lg w-11/12 bg-slate-700"/>

            <input type="password" placeholder="Password" className="mx-4 my-3 px-1 py-3 rounded-lg w-11/12 bg-slate-700"/>

            <button onClick={toggleActions} className="text-bold bg-red-700 w-11/12 py-2 mx-4 my-3 rounded-lg">{formName}</button>

            <h2 className="mx-auto">Forgot password?</h2>
            <div className="flex">
                <input type="checkbox" className="w-6"></input>
                <span className="px-3 my-4 text-lg">Remember me!</span>
            </div>
            <div className="flex text-gray-400">
                <h2 className="text-lg">{formName ==="Sign Up"?"Have an Account?":"New to NetFlix?"}</h2>
                <p onClick={toggleForm} className=" px-4 hover:underline cursor-pointer text-white">{ formName === "Sign In"?"Sign Up Now!":"Sign In Here!"}</p>
            </div>
            <p className="text-gray-400 mt-8 text-sm mx-3">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className="text-blue-600 text-sm">Learn more.</Link>
            </p>
            
        </form>
    </div>
}

export default Login;

