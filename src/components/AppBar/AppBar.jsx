import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header>
      <div  className={css.container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
