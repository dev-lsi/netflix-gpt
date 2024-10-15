import Duck from "../assets/duck.png";
import Header from "./Header";
import Footer from "./Footer";

const ResetPassword = () => {
  return (
    <div className="flex flex-wrap pt-24 justify-center ">
        <Header/>
      <h2 className="basis-full text-center">
        This Page Is Under Construction...
      </h2>
      <h4 className="basis-full text-center">
        {"ToDo: [ Reset Your Password Here ]"}
      </h4>
      <h3 className="basis-full text-center mt-6">
        We are sorry for the inconvinience 😎🌞
      </h3>
      <img className="scale-50" src={Duck} alt="duck-image" />
      <Footer/>
    </div>
  );
};

export default ResetPassword;
