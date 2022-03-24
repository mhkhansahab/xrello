import { FC } from "react";
import {
    Grid,
    Checkbox,
    FormGroup,
    FormControlLabel,
    TextField,
    Button
} from "@mui/material";
import { Box, maxWidth } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";

const GlassContainer = styled("div")(({ theme }) => ({
    background: alpha(theme.palette.info.main, 0.03),
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(30px)",
    borderRadius: "5px",
    width: "700px",
    height: "500px",
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    marginLeft:"auto",
    marginRight:"auto",
    transform:'translateY(-50%)',
    marginTop:'50vh',

    '.flex-center': {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    },
    '.inner-box': {
        flexDirection: 'column',
        maxWidth: '300px'
    }
}));

const Index: FC = () => {
    return (        
            <GlassContainer>
                <Box className='flex-center inner-box'>
                    <TextField placeholder="Email" />
                    <TextField placeholder="Password" />
                    <Button variant="contained">Login</Button>
                </Box>
            </GlassContainer>
        
    );
};

export default Index;
