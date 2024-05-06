import {Box, Grid, Link, TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

const paperStyle={padding :20, minHeight:'42vh', maxWidth: 360, margin:'60px auto'};
const btnstyle={margin:'8px 0'};

const TextFieldBox = styled(Box)(({ theme }) => ({

    [theme.breakpoints.up('xs')]: {
        margin: '0 auto',
        maxWidth: '220px',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '320px',
    },
    [theme.breakpoints.up('lg')]: {
       maxWidth: '320px',
    },
}));


const SignUp = () => {
    return(
        <>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <h2>Sign Up</h2>
                    </Grid>
                    <TextFieldBox>
                        <TextField label="Username" placeholder="Enter username" variant="outlined" fullWidth required/>
                        <TextField sx={{marginY: '16px'}} label="Email" placeholder="Enter email" variant="outlined" fullWidth required/>
                        <TextField label="Password" placeholder="Enter password" type="password" variant="outlined" fullWidth required/>
                        <TextField sx={{marginY: '16px'}} label="Repeat Password" placeholder="Repeat password" type="password" variant="outlined" fullWidth required/>
                        <Button sx={{mb: '8px'}} type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Sign up</Button>
                    </TextFieldBox>
                    <Typography > Do you have an account ?
                        <Link href="#" >
                            Sign In
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
};

export default SignUp;
