import css from "./Logo.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <nav className={css.navContainer}>
      <Link to="/">
        <img src={logo} alt="TravelTrucks logo" />
      </Link>
    </nav>
  );
}
