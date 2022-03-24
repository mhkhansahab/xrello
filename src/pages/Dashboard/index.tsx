import { FC } from "react";
import Navbar from "./../../components/NavBar";
import { styled, alpha } from "@mui/material/styles";

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

const getBoard = (title: string, description: string, members: string) => {
  return (
    <Board>
      <BoardTitle>{title}</BoardTitle>
      <BoardDescription>{description}</BoardDescription>
      members : {members}
    </Board>
  );
};

const index: FC = () => {
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
        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}
        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}
        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}

        {getBoard(
          "Title",
          "asdasdasdasdfjhafgjhdfgahgsfdasghfdajhgafdjhsgfdghsafdjghs",
          "35"
        )}
      </div>
    </MainDiv>
  );
};

export default index;
