import s from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={s["footer"]}>
        <div className={s["footer-section"]}>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Questions?  Contact us.</a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">FAQ</a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Terms of Use</a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Cookie Preferences</a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Ad Choices</a>
        </div>
        <div className={s["footer-section"]}>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Help Center</a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Privacy</a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Corporate Information</a>
        </div>
    </div>
  );
};

export default Footer;
