import { FC, useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { styled, alpha } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../../redux/actions/statusActions";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Heading = styled("div")(({ theme }) => ({
  fontSize: "25px",
  marginBottom: "15px",
  textAlign: "center",
}));

const Container = styled("div")(({ theme }) => ({
  background: `linear-gradient( 130deg,  ${theme?.palette?.info?.light} 11.2%, ${theme?.palette?.info?.dark} 78% )`,
  boxShadow: "0 0 1rem 0 " + alpha(theme.palette.info.contrastText, 0.2),
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  width: "fit-content",
  height: "fit-content",
  padding: "30px",
  marginLeft: "auto",
  marginRight: "auto",
  alignItems: "center",
  justifyContent: "center",
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

const CustomInputArea = styled("textarea")(({ theme }) => ({
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
  resize: "vertical",
}));

const CustomButton = styled("div")(({ theme }) => ({
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
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  alignItems: "center",
  width: "80%",
}));

const Index: FC = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(changeStatus({ userModal: false }));
  const [members, setMembers] = useState<any>([]);
  //@ts-ignore
  const status = useSelector((state) => state?.statusReducer?.userModal);
  //@ts-ignore
  const token: any = useSelector((state) => state?.userReducer?.token);

  useEffect(() => {
    const id = window.location.href.split("/")[4];
    axios({
      method: "post",
      url: baseUrl + "board/getAllTeamMember",
      data: { boardId: id },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log(res.data.data.teamMembers);
        setMembers(res.data.data.teamMembers);
      })
      .catch((error: any) => console.log(error));
  }, []);

  return (
    <Modal
      open={status}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
        border: "none",
      }}
    >
      <Container style={{ alignItems: "center" }}>
        <Heading>Members</Heading>
        {members.length <= 0 ? (
          <div style={{ textAlign: "center" }}>"No Members"</div>
        ) : null}
        {members.map((e: any, i: any) => {
          return (
            <div key={i} style={{ textAlign: "center" }}>
              {e}
            </div>
          );
        })}
      </Container>
    </Modal>
  );
};

export default Index;
