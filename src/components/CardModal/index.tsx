import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from '@mui/material';

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

const CustomTextArea = styled("textarea")(({ theme }) => ({
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


const Wrapper = styled("div")(({ theme }) => ({
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    

}))


const Index: FC = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}
        >
            <Wrapper>

                <div className='box-container' style={{ width: '500px', height: '600px', background: `${theme.palette.primary.light}`, color: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <CustomInput
                        placeholder="Title"
                        onChange={(e) => {
                            { }
                        }}
                    />
                    <br />
                    <CustomTextArea
                        placeholder="Description"
                        onChange={(e) => {
                            { }
                        }}
                    />
                </div>
            </Wrapper>
        </Modal>
    )
}

export default Index;



