import { FC, useState, useEffect } from "react";
import Navbar from "./../../components/NavBar";
import { styled, alpha } from "@mui/material/styles";
import CardModal from "./../../components/CardModal";
import BoardModal from "./../../components/BoardModal";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainDiv = styled("div")(({ theme }) => ({
  width: "100%",
  maxHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    overflowX: "auto",
    padding: "0",
  },

  "*::-webkit-scrollbar": {
    height: "12px",
  },
  "*::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    outline: "none",
    background: alpha(theme.palette.info.main, 0.03),
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(30px)",
  },
}));

const Board = styled("div")(({ theme }) => ({
  width: "280px",
  height: "fit-content",
  background: alpha(theme.palette.info.main, 0.03),
  boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  padding: "13px",
  cursor: "pointer",
  textAlign: "right",
  fontWeight: "bold",
  margin: "7px",
}));

const BoardTitle = styled("div")(({ theme }) => ({
  borderRadius: "5px",
  fontSize: "23px",
  textAlign: "left",
  fontWeight: "bold",
  marginBottom: "5px",
}));

const BoardDescription = styled("div")(({ theme }) => ({
  borderRadius: "5px",
  fontSize: "17px",
  textAlign: "left",
  overflowWrap: "break-word",
  marginBottom: "7px",
  fontWeight: "300",
}));

const Index: FC = () => {
  const [boards, setBoards] = useState<any>(null);
  //@ts-ignore
  const token: any = useSelector((state) => state?.userReducer?.token);
  //@ts-ignore
  const id: any = useSelector((state) => state?.userReducer?.id);

  const navigate = useNavigate();

  const getAllBoards = () => {
    let bodyFormData = {
      _id: id,
    };

    axios({
      method: "post",
      url: baseUrl + "board/getAllBoards",
      data: bodyFormData,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log(res);
        setBoards(res.data.data);
      })
      .catch(async (error) => {
        console.log(error);
      });
  };

  const getBoard = (
    title: string,
    description: string,
    members: string,
    id: string,
    i: any
  ) => {
    return (
      <Board
        onClick={() => {
          navigate("/board/" + id);
        }}
        key={i}
      >
        <BoardTitle>{title}</BoardTitle>
        <BoardDescription>{description}</BoardDescription>
        members : {members}
      </Board>
    );
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  return (
    <MainDiv>
      <Navbar />
      <div
        style={{
          display: "flex",
          padding: "17px",
          flexFlow: "wrap",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "70px",
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {boards != null && boards.length > 0
          ? boards.map((e: any, i: any) => {
              return getBoard(
                e.title,
                e.description,
                e.teamMembers.length.toString(),
                e._id,
                i
              );
            })
          : "You Don't have any boards, Add a board."}
      </div>
      <CardModal />
      <BoardModal />
    </MainDiv>
  );
};

export default Index;
