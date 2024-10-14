import Header from "./Header";
import Footer from "./Footer";
import s from "./Home.module.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className={s["home"]}>
      <Header/>
      <div className={s["home-layout"]}>
           <div className={s["headers-container"]}>
              <div className={s["headings"]}>
                <h1>Unlimited movies, TV shows, and more</h1>
                <h6>Starts at EUR 4.99. Cancel anytime.</h6>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
              </div>
              <div className={s["controls"]}>
                <input/>
                <Link to="/login">
                   <button>
                    <span>Get Started </span>
                    <span className="pl-3">{" >"}</span>
                   </button>
                </Link>
              </div>
           </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
