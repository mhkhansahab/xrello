import { FC } from 'react';
import Navbar from './../../components/NavBar';
import SideBar from './../../components/SideBar';
import { styled, alpha } from "@mui/material/styles";
import ContentBar from './../../components/ContentBar';

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
        backgroundColor: 'grey',
        outline: 'none',
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
        </MainDiv>
    )
}

export default Index;