import { FC, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { useSelector } from "react-redux";

const MainDiv = styled("div")(({ theme }) => ({
  width: "96%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  margin: "10px auto",
  background: `linear-gradient( 130deg,  ${theme?.palette?.info?.light} 11.2%, ${theme?.palette?.info?.dark} 78% )`,
  boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  padding: "10px",
}));

const LinkTab = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  cursor: "pointer",
  margin: "0 20px",
  ".button": {
    borderRadius: "5px",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    background: alpha(theme.palette.info.main, 0.03),
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(30px)",
    padding: "5px 14px",
    ">span": {
      marginLeft: "5px",
      marginRight: "5px",
    },
    ".board-button": {
      marginRight: "0px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 5px",
  },
}));

const Index: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //@ts-ignore
  const username: any = useSelector((state) => state?.userReducer?.username);

  return (
    <MainDiv>
      <LinkTab onClick={() => navigate("/")} style={{ marginRight: "auto" }}>
        Trello
      </LinkTab>
      <LinkTab onClick={() => navigate("/")}>
        <div className="button">
          <AddIcon />
          {!isMobile ? <span className="board-button">Create Board</span> : ""}
        </div>
      </LinkTab>
      <LinkTab onClick={() => navigate("/")}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100%",
            height: "30px",
            width: "30px",
            fontWeight: "bold",
            background: `linear-gradient( 130deg,  ${theme?.palette?.info?.light} 11.2%, ${theme?.palette?.info?.dark} 78% )`,
            boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
          }}
          onClick={() => {
            window.localStorage.removeItem("persist:Logs");
            window.location.reload();
          }}
        >
          {username ? username.split("")[0] : "N"}
        </div>
      </LinkTab>
    </MainDiv>
  );
};

export default Index;
