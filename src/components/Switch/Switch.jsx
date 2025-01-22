import Switch from "@mui/material/Switch";
import { useThemeContext } from "../../Theme/ThemeContextProvider";

export default function ControlledSwitch() {
  const { isDarkMode, toggleTheme } = useThemeContext();
  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      inputProps={{ "aria-label": "theme switch" }}
    />
  );
}
