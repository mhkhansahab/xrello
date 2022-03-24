import { FC } from 'react';
import Navbar from './../../components/NavBar';
import SideBar from './../../components/SideBar';
import { styled, alpha } from "@mui/material/styles";
import ContentBar from './../../components/ContentBar';
import CardModal from './../../components/CardModal';

const MainDiv = styled("div")(({ theme }) => ({
    width: "100%",
    '.content-container': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px 20px',
        [theme.breakpoints.down('lg')]: {
            maxWidth: '100%',
            overflowX: 'auto',
            margin: '0 20px',
            padding: '0'
        }
    },
    '.content-container::-webkit-scrollbar': {
        height: '12px'
    },
    '.content-container::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: alpha(theme.palette.info.main,0.2),
        outline: 'none',
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backdropFilter: "blur(30px)",
    }

}));


const Index: FC = () => {

    return (
        <MainDiv>
            <Navbar />
            <div className='content-container'>
                <SideBar />
                <ContentBar />
            </div>
            <CardModal/>
        </MainDiv>
    )
}

export default Index;