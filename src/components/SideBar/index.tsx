import { FC, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

const MainDiv = styled("div")(({ theme }) => ({
    width: "26%",
    maxWidth: '300px',
    height: "80vh",
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    margin: '10px',
    paddingTop: '40px',
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(30px)",
    borderRadius: "5px",
    [theme.breakpoints.down('md')]: {
        display: 'none'
      }
}));

const LinkTab = styled("div")(({ theme }) => ({
    textAlign: 'left',
    color: theme.palette.text.primary,
    margin: '5px 20px',
    background: `linear-gradient( 130deg,  ${theme?.palette?.info?.light} 11.2%, ${theme?.palette?.info?.dark} 78% )`,
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(30px)",
    borderRadius: "5px",
    width: '90%',
    padding: '10px',
    paddingLeft: '20px',
    cursor: 'pointer',
    '.button': {
        borderRadius: '5px',
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'space-evenly',
        background: alpha(theme.palette.info.main, 0.03),
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backdropFilter: "blur(30px)",
        padding: '5px 14px',
        '>span': {
            marginLeft: '5px',
            marginRight: '5px',
        },
        '.board-button': {
            marginRight: '0px'
        }
    },
    [theme.breakpoints.down('sm')]: {
        margin: '0 5px'
    }
}));

const Index: FC = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (

        <MainDiv>
            <LinkTab
                onClick={() => navigate("/")}
            >
                Boards
            </LinkTab>
            <LinkTab
                onClick={() => navigate("/")}
            >
                Members
            </LinkTab>
            <LinkTab
                onClick={() => navigate("/")}
            >
                Settings
            </LinkTab>

        </MainDiv>
    );
};

export default Index;
