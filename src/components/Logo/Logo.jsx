import css from "./Logo.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <nav className={css.logoContainer}>
      <Link to="/">
        <img src={logo} alt="TravelTrucks logo" className={css.logo} />
      </Link>
    </nav>
  );
}
