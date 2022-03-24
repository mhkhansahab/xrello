import { FC } from 'react';
import Navbar from './../../components/NavBar';
import SideBar from './../../components/SideBar';
import { styled, alpha } from "@mui/material/styles";
import ContentBar from './../../components/ContentBar';

const MainDiv = styled("div")(({ theme }) => ({
    width: "100%",
    '.content-container':{
        display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px 30px'
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