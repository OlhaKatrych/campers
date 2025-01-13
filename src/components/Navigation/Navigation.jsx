import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = (prop) => {
  return clsx(css.link, prop.isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.navContainer}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}
