import { FC, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { addUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

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
  cursor: "pointer"
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

const ErrorMsg = styled("div")(({ theme }) => ({
  fontSize: "15px",
  fontWeight: "bold",
  maxWidth: "250px",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "9px",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  cursor: "pointer",
}));

const Index: FC = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const login = async () => {
    if (email == "" || password == "") {
      setErrorMsg("Enter all information.");
      return;
    } else {
      setErrorMsg("LogingIn...");
    }

    let bodyFormData = {
      email,
      password,
    };

    axios({
      method: "post",
      url: baseUrl + "auth/login/",
      data: bodyFormData,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res?.data?.status == "failed") {
          setErrorMsg(res?.data?.msg);
        } else {
          const token = res?.data?.token;
          const id = res?.data?.data?._id;
          const username = res?.data?.data?.username;
          const email = res?.data?.data?.email;

          const obj = {
            token,
            id,
            username,
            email,
          };

          dispatch(addUser(obj));
        }
      })
      .catch(async (error) => {
        if (error?.response?.data?.status == "failed") {
          setErrorMsg(error?.response?.data?.msg);
        } else {
          console.log(error);
        }
      });
  };

  return (
    <GlassContainer>
      <Heading>Login</Heading>
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

      {errorMsg != "" ? <ErrorMsg>{"*" + errorMsg}</ErrorMsg> : null}

      <CustomButton
        onClick={() => {
          login();
        }}
      >
        Login
      </CustomButton>
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
