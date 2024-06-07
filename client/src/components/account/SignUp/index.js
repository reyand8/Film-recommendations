import {Box, Link, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import {useState} from 'react';
import {validateSignUp, isValid} from '../validation';

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


const SignUp = ({formState, handlerChange, handleSubmit, setLogin}) => {

    const [errors, setErrors] = useState({ username: '', email: '', password: '' });

    const onSubmit = (e) => {
        e.preventDefault();
        const formValidation = validateSignUp(formState);
        setErrors(formValidation);
        if (isValid(formValidation)) {
            handleSubmit(e);
        }
    };

    return(
        <>
            <TextFieldBox component="form" onSubmit={onSubmit}>
                <TextField label="Username"
                           placeholder="Enter username"
                           name="username"
                           variant="outlined" fullWidth required
                           value={formState.username}
                           inputProps={{
                               pattern: '[A-Za-z]+',
                           }}
                           onChange={handlerChange}
                           error={!!errors.username}
                           helperText={errors.username}
                />
                <TextField sx={{marginY: '16px'}}
                           label="Email"
                           placeholder="Enter email"
                           name="email"
                           variant="outlined" fullWidth required
                           value={formState.email}
                           onChange={handlerChange}
                           error={!!errors.email}
                           helperText={errors.email}
                />
                <TextField label="Password"
                           placeholder="Enter password"
                           name="password"
                           type="password"
                           variant="outlined" fullWidth required
                           value={formState.password}
                           onChange={handlerChange}
                           error={!!errors.password}
                           helperText={errors.password}
                />
                <Button sx={{mb: '8px'}}
                        type="submit"
                        color="primary"
                        variant="contained"
                        style={btnstyle} fullWidth>
                    Sign Up
                </Button>
            </TextFieldBox>
            <Typography > Do you have an account ?
                <Link>
                    <Button onClick={() => setLogin(prev => !prev)}>
                        Sign In
                    </Button>
                </Link>
            </Typography>
        </>
    );
};

export default SignUp;