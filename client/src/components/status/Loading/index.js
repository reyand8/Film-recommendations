import {Box, CircularProgress} from '@mui/material';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';


const PaperLoading = styled(Paper)(({ theme }) => ({
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'center',
    margin:'auto',
}));

const Loading = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: 2}}>
            <PaperLoading>
                <CircularProgress sx={{ my: 7}} size="5rem" />
            </PaperLoading>
        </Box>
    );
};

export default Loading;