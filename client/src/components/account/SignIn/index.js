import {Box, Grid, Link, TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

const paperStyle={padding :20, minHeight:'36vh', maxWidth: 360, margin:'60px auto'};
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


const SignIn = () => {
    return(
        <>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <h2>Sign In</h2>
                    </Grid>
                    <TextFieldBox>
                        <TextField sx={{mb: '16px'}} label="Username" placeholder="Enter username" variant="outlined" fullWidth required/>
                        <TextField label="Password" placeholder="Enter password" type="password" variant="outlined" fullWidth required/>
                        <FormControlLabel
                            control={<Checkbox name="checkedB" color="primary"/>}
                            label="Remember me"
                        />
                        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                        <Typography sx={{marginY: '12px'}}>
                            <Link href="#" >
                                Forgot password ?
                            </Link>
                        </Typography>
                    </TextFieldBox>
                    <Typography >
                        <Link href="#" >
                            Registration
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
};

export default SignIn;
