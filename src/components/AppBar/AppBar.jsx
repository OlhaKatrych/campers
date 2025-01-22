import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import Switch from "../Switch/Switch";

export default function AppBar() {
  return (
    <header className={css.container}>
      <Logo />
      <Navigation />
      <Switch />
    </header>
  );
}
