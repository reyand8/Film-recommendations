import {Box} from '@mui/material';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import ErrorIcon from '@mui/icons-material/Error';

import theme from '../../assets/theme';

const PaperError = styled(Paper)(({ theme }) => ({
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'center',
    margin:'auto',
}));

const DataError = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: 2}}>
            <PaperError>
                <ErrorIcon sx={{fontSize: 60, my: 7, fill: theme.palette.error.main}}  />
            </PaperError>
        </Box>
    );
};

export default DataError;