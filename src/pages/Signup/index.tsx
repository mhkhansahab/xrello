import { FC, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utils/constants";

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

const CustomLabelFile = styled("label")(({ theme }) => ({
  background: alpha(theme.palette.info.main, 0.03),
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "19px",
  border: "none",
  padding: "7px",
  margin: "7px 0px",
  outline: "none",
  fontSize: "19px",
  cursor: "pointer",
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
  padding: "7px 14px",
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
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profilePic, setProfilePic] = useState<any>(null);

  const signup = async () => {
    if (name == "" || email == "" || password == "" || profilePic == null) {
      setErrorMsg("Enter all information.");
      return;
    }

    let bodyFormData = {
      username: name,
      email,
      password,
      confirmpassword: password,
      img: profilePic,
    };

    let response = await axios({
      method: "post",
      url: baseUrl + "auth/signup",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(response);
  };

  return (
    <GlassContainer>
      <Heading>SignUp</Heading>
      <CustomInput
        placeholder="Enter Name"
        type={"name"}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <CustomInput
        placeholder="Enter Email"
        type={"email"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <CustomInput
        placeholder="Enter Password"
        type={"password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <div style={{ width: "100%", height: "10px" }}></div>
      <CustomLabelFile htmlFor={"file"}>
        Select profile picture &nbsp;&nbsp;&nbsp;
      </CustomLabelFile>
      <CustomInput
        placeholder="Select File"
        type={"file"}
        id={"file"}
        onChange={(e) => {
          setProfilePic(e.target.value);
        }}
      />
      <div style={{ width: "100%", height: "10px" }}></div>
      <CustomButton
        onClick={() => {
          signup();
        }}
      >
        Signup
      </CustomButton>
      <CustomMsg
        onClick={() => {
          navigate("/login");
        }}
      >
        Already have an account? &nbsp;
        <span style={{ fontWeight: "700" }}>Login</span>
      </CustomMsg>
    </GlassContainer>
  );
};

export default Index;
