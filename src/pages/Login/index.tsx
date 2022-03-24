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
                <Box className='rounded-md bg-custom-light dark:bg-header-black w-full field-box'>
                    <div className='pl-2  flex items-center'>
                        <FormControlLabel
                            classes={{ label: 'field-label' }}
                            onChange={() => { }
                            }
                            control={
                                <TextField></TextField>
                            }
                            label={''}
                        />
                    </div>
                </Box>
            </FormGroup>
        </Grid >
    )
}

export default Index
