import Logo from "../assets/Netflix_Logo_PMS.png";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s["header"]}>
      <Link className={s["header-a-link"]} to="/">
        <div className={s["logo-container"]}>
          <img className={s["logo-img"]} src={Logo} alt="logo" />
        </div>
      </Link>
      <Link className={s["header-a-link"]} to="/login">
        <button className="font-bold text-[0.9em] h-8 px-4 ">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Header;
