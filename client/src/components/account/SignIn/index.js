import {Box, Link, TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import React, {useState} from 'react';

import {validateSignIn, isValid} from '../validation';

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


const SignIn = ({formState, handlerChange, handleSubmit, setLogin}) => {
    const [errors, setErrors] = useState({ email: '', password: '' });

    const onSubmit = (e) => {
        e.preventDefault();
        const formValidation = validateSignIn(formState);
        setErrors(formValidation);
        if (isValid(formValidation)) {
            handleSubmit(e);
        }
    };

    return(
        <>
            <TextFieldBox component="form" onSubmit={onSubmit}>
                <TextField
                    sx={{mb: '16px'}}
                    label="Email"
                    placeholder="Enter email"
                    type="email"
                    variant="outlined"
                    name="email"
                    fullWidth required
                    value={formState.email}
                    onChange={handlerChange}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    variant="outlined"
                    name="password"
                    fullWidth required
                    value={formState.password}
                    onChange={handlerChange}
                    error={!!errors.password}
                    helperText={errors.password}
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
                    fullWidth>
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