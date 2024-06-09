import {Box, Link, TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import React, {useState} from 'react';

import {validateSignIn, isValid} from '../validation';
import {FormattedMessage} from 'react-intl';

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

    const handleApolloServerError = (error) => {
        if (error.message.includes('Invalid email or password')) {
            setErrors(prev => ({ ...prev, general: 'Invalid email or password' }));
        } else {
            setErrors(prev => ({ ...prev, general: 'An unexpected error occurred' }));
        }
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        const formValidation = validateSignIn(formState);
        setErrors(formValidation);
        if (isValid(formValidation)) {
            try {
                await handleSubmit(e);
            } catch (error) {
                handleApolloServerError(error);
            }
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
                    label={<FormattedMessage id="auth.remember_me"/>}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth>
                    <FormattedMessage id="auth.sign_in"/>
                </Button>
                <Typography sx={{marginY: '12px'}}>
                    <Link href="#" >
                        <FormattedMessage id="auth.forgot_password"/>
                    </Link>
                </Typography>
            </TextFieldBox>
            <Typography>
                <Button onClick={() => setLogin(prev => !prev)}>
                    <FormattedMessage id="auth.sign_up"/>
                </Button>
            </Typography>
        </>
    );
};

export default SignIn;