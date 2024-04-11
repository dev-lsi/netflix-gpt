import { logoURL } from "../utils/constants";

const Header=()=>{
    return (
        <div className=" left-0 right-0 top-0 absolute px-5 bg-gradient-to-b from-slate-950"> 
            <img className=" h-20" src={logoURL} alt="logo"/>
        </div>
    )
}

export default Header;