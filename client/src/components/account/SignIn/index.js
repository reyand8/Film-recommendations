import {Box, Link, TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

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


const SignIn = ({formState, handlerChange, handleSubmit, signIn, setLogin}) => {
    return(
        <>
            <TextFieldBox component="form" onSubmit={handleSubmit}>
                <TextField
                    sx={{mb: '16px'}}
                    label="Username"
                    placeholder="Enter username"
                    variant="outlined"
                    fullWidth required
                    inputProps={{
                        pattern: '[A-Za-z ]+',
                    }}
                    value={formState.username}
                    onChange={handlerChange}
                />
                <TextField
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    variant="outlined"
                    fullWidth required
                    value={formState.password}
                    onChange={handlerChange}
                />
                <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                    onClick={signIn}>
                    Sign In
                </Button>
                <Typography sx={{marginY: '12px'}}>
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
            </TextFieldBox>
            <Typography>
                <Button onClick={() => setLogin(prev => !prev)}>
                    Registration
                </Button>
            </Typography>
        </>
    );
};

export default SignIn;
