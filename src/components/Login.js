import s from "./Login.module.css";
import Footer from "./Footer";
import Header from "./Header";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className={s["login"]}>
       <Header/>
       <div className={s["login-layout"]}>
        <form>
                <h4>{"Sign In"}</h4>
                <input className={s["form-input"]}/>
                <input className={s["form-input"]}/>
                <button>Sign In</button>
                <h6 className={s["or"]}>OR</h6>
                <p className={s["forgot-password"]}>Forgot password?</p>
                <p className={s["new-to-nf"]}>New to Netflix?
                  <Link to=""><span className={s["new-to-nf-span"]}>Sign up now.</span></Link>
                </p>
                <h1>.</h1>
                <h1>.</h1>
                <h1>.</h1>
                <h1>.</h1>
                <h1>.</h1>
                <h1>.</h1>
                <h1>.</h1>

                <p className={s["capcha"]}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
        </form>
       </div>
       <Footer/>
    </div>
  )
}

export default Login;

