import { FC } from "react";
import {
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";

const GlassContainer = styled("div")(({ theme }) => ({
  background: alpha(theme.palette.info.main, 0.03),
  boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  width: "700px",
  height: "500px",

  [theme.breakpoints.down("sm")]: {},
}));

const Index: FC = () => {
  return (
    <div>
      <GlassContainer></GlassContainer>
    </div>
  );
};

export default Index;
