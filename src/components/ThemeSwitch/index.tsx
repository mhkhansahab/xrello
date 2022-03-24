import { FC } from "react";
import { useTheme } from "@mui/material";
import { useThemeSwitch } from "../../hooks/switchTheme";
import { alpha } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const Index: FC = () => {
  const theme = useTheme();
  const [mode, switchTheme] = useThemeSwitch();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1000",
        bottom: "7px",
        left: "7px",
        paddingLeft: "15px",
        paddingRight: "5px",
        paddingTop: "4px",
        background: alpha(theme.palette.info.main, 0.03),
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backdropFilter: "blur(30px)",
        borderRadius: "5px",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      Theme
      <Switch
        {...label}
        defaultChecked
        onChange={() => {
          console.log("asdasd");
          switchTheme();
        }}
      />
    </div>
  );
};

export default Index;
