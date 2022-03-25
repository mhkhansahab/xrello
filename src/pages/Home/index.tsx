import { FC, useEffect, useState } from "react";
import Navbar from "./../../components/NavBar";
import SideBar from "./../../components/SideBar";
import { styled, alpha } from "@mui/material/styles";
import ContentBar from "./../../components/ContentBar";
import CardModal from "./../../components/CardModal";
import BoardModal from "./../../components/BoardModal";
import { display } from "@mui/system";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const MainDiv = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  ".content-container": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0px 20px",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
      overflowX: "auto",
      margin: "0 20px",
      padding: "0",
      "::-webkit-scrollbar": {
        height: "12px",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: alpha(theme.palette.info.main, 0.2),
        outline: "none",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backdropFilter: "blur(30px)",
      },
    },
  },
}));

const Index: FC = () => {
  const [boardId, setBoardId] = useState("");
  const [boardDetails, setboardDetails] = useState(null);
  //@ts-ignore
  const token: any = useSelector((state) => state?.userReducer?.token);

  useEffect(() => {
    setBoardId(window.location.href.split("/")[4]);
  }, []);

  useEffect(() => {
    getBoardDetails();
  }, [boardId]);

  const getBoardDetails = () => {
    if (boardId == "") {
      return;
    }

    let bodyFormData = {
      _id: boardId,
    };

    axios({
      method: "post",
      url: baseUrl + "board/getBoard",
      data: bodyFormData,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log(res);
        setboardDetails(res.data.data);
      })
      .catch(async (error) => {
        console.log(error);
      });
  };

  return (
    <MainDiv>
      <Navbar />
      <div
        className="content-container"
        style={{
          paddingTop: "0px",
          display: "flex",
          height: "100%",
          flex: 1,
        }}
      >
        <SideBar />
        <ContentBar />
      </div>
      <CardModal />
      <BoardModal />
    </MainDiv>
  );
};

export default Index;
