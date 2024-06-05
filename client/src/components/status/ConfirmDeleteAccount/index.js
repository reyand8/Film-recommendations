import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


const BoxOverlay = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(33, 33, 35, 0.8)',
    zIndex: 98,
}));

const BoxWrapper = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: theme.palette.background.paper,
    maxWidth: '390px',
    zIndex: 99,
    padding: '24px',
}));


const ConfirmDelete = ({handleDeleteAccount, setOpenConfirm}) => {
    return (
        <>
            <BoxOverlay />
            <BoxWrapper>
                <Box sx={{display: 'flex', justifyContent:' flex-end'}}>
                    <CloseIcon onClick={() => setOpenConfirm(true)}/>
                </Box>
                <Typography variant="h5" sx={{fontSize: '24px', marginY: '14px', display: 'flex',
                    justifyContent: 'center'}}>
                    Delete Account
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography sx={{fontSize: '19px', mb: '18px'}}>
                        Are you sure that you want to delete your account?
                    </Typography>
                    <Button variant="contained" type="submit" size="large" onClick={handleDeleteAccount}>
                        <DeleteIcon/>
                        <Typography>Delete account</Typography>
                    </Button>
                </Box>
            </BoxWrapper>
        </>
    );
};

export default ConfirmDelete;