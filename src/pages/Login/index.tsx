import { FC } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const GlassContainer = styled("div")(({ theme }) => ({
  background: alpha(theme.palette.info.main, 0.03),
  boxShadow: "0 0 1rem 0 " + alpha(theme.palette.info.contrastText, 0.2),
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  width: "fit-content",
  height: "fit-content",
  padding: "30px 15px",
  marginLeft: "auto",
  marginRight: "auto",
  transform: "translateY(-50%)",
  marginTop: "50vh",
}));

const CustomInput = styled("input")(({ theme }) => ({
  background: alpha(theme.palette.info.main, 0.03),
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "none",
  padding: "7px",
  margin: "7px 14px",
  outline: "none",
  fontSize: "19px",
}));

const Heading = styled("div")(({ theme }) => ({
  fontSize: "25px",
  marginBottom: "15px",
}));

const CustomButton = styled("button")(({ theme }) => ({
  background: `linear-gradient( 130deg,  ${theme?.palette?.info?.light} 11.2%, ${theme?.palette?.info?.dark} 78% )`,
  boxShadow: "0 0 1rem 0 " + alpha(theme.palette.info.contrastText, 0.2),
  backdropFilter: "blur(30px)",
  fontSize: "19px",
  margin: "15px",
  border: "none",
  borderRadius: "5px",
  padding: "7px 21px",
  fontWeight: "700",
  color: "#fff",
}));

const CustomMsg = styled("div")(({ theme }) => ({
  fontSize: "13px",
  margin: "15px 0px",
  marginTop: "9px",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  cursor: "pointer",
}));

const Index: FC = () => {
  const navigate = useNavigate();
  return (
    <GlassContainer>
      <Heading>Login</Heading>
      <CustomInput placeholder="Enter Email" type={"email"} />
      <br />
      <CustomInput placeholder="Enter Password" type={"password"} />
      <br />
      <CustomButton>Login</CustomButton>
      <CustomMsg
        onClick={() => {
          navigate("/signup");
        }}
      >
        Don't have an account? &nbsp;
        <span style={{ fontWeight: "700" }}>Signup</span>
      </CustomMsg>
    </GlassContainer>
  );
};

export default Index;
