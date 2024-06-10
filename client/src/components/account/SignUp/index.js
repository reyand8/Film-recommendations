import {Box, Link, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {validateSignUp, isValid} from '../validation';
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


const SignUp = ({formState, handlerChange, handleSubmit, setLogin}) => {

    const [errors, setErrors] = useState({ username: '', email: '', password: '' });

    const handleApolloServerError = (error) => {
        if (error.message.includes('Unique constraint failed on the fields: (`email`)')) {
            setErrors(prev => ({ ...prev, email: 'This email is already exists' }));
        } else if (error.message.includes('Unique constraint failed on the fields: (`username`)')) {
            setErrors(prev => ({ ...prev, username: 'This username is already exists' }));
        } else {
            setErrors(prev => ({ ...prev, general: 'An unexpected error occurred' }));
        }
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        const formValidation = validateSignUp(formState);
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
                        name="Sign Up"
                        variant="contained"
                        style={btnstyle} fullWidth>
                    <FormattedMessage id="auth.sign_up"/>
                </Button>
            </TextFieldBox>
            <Typography > <FormattedMessage id="auth.auth_question"/>
                <Link>
                    <Button name="Sign In" onClick={() => setLogin(prev => !prev)}>
                        <FormattedMessage id="auth.sign_in"/>
                    </Button>
                </Link>
            </Typography>
        </>
    );
};

export default SignUp;