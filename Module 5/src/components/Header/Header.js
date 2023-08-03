import logo from "../../assets/investment-calculator-logo.png";
import style from "./header.module.css";

const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Header;
