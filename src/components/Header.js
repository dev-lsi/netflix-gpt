import Logo from "../assets/Netflix_Logo_PMS.png";
import s from "./Header.module.css";
const Header = () => {
  return (
    <div className={ s["header"] + " flex justify-between bg-gradient-to-b  fixed left-0 right-0 top-0  pl-20 pr-24 pt-2 pb-4 z-50"}>
        <div className="logo-container  shrink-0">
            <img className={s["logo-img"]} src={Logo} alt="logo"/>
        </div>
        <button className="bg-[rgb(229,9,20)] text-amber-50 font-bold text-[0.9em] h-8 line px-4 rounded-[3px] self-center shrink-0">Sign In</button>  
    </div>
  );
}

export default Header;
