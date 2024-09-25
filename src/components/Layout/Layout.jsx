import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
