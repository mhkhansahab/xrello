import { FC } from 'react';
import {
    Grid,
    Checkbox,
    FormGroup,
    FormControlLabel,
    TextField
} from '@mui/material';
import { Box } from '@mui/system';


const Index: FC = () => {

    return (
        <Grid className='pt-4 grid-container'>
            <FormGroup>
                <Box className=''>
                    <TextField placeholder='Email'></TextField>
                    <TextField placeholder='Password'></TextField>
                </Box>
            </FormGroup>
        </Grid >
    )
}

export default Index
