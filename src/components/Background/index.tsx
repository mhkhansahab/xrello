import { FC } from 'react';
import { styled } from "@mui/material/styles";


const Index: FC = ({ children }) => {

    const Container = styled("div")(({ theme }) => ({
        width: '100vw',
        position: 'fixed',
        zIndex: '-1000',
        top: '0',
        backgroundImage: `linear-gradient( 360deg,  ${theme?.palette?.info?.light} 11.2%, ${theme?.palette?.info?.dark} 78% )`,
        height: '100vh',
    }));

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Index
