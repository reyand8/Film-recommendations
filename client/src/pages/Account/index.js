import {Grid} from '@mui/material';
import Paper from '@mui/material/Paper';

import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useMutation} from '@apollo/client';

import {SIGN_UP_MUTATION, SIGN_IN_MUTATION} from '../../gqlClient/mutations/mutations';
import SignIn from '../../components/account/SignIn';
import SignUp from '../../components/account/SignUp';
import {AUTH_TOKEN} from '../../constants';

const paperStyle={padding :20, minHeight:'42vh', maxWidth: 360, margin:'60px auto'};


const Account = () => {
    const navigate = useNavigate();
    const  [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [login, setLogin] = useState(true);
    const [validForm, setValidForm] = useState(false);

    const [signInUser] = useMutation(SIGN_IN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password,
        },
        onCompleted: ({signInUser}) => {
            localStorage.setItem(AUTH_TOKEN, signInUser.token);
        },
    });

    const [signUpUser] = useMutation(SIGN_UP_MUTATION, {
        variables: {
            username: formState.username,
            email: formState.email,
            password: formState.password,
        },
        onCompleted: ({signUpUser}) => {
            localStorage.setItem(AUTH_TOKEN, signUpUser.token);
        }});

    const handlerChange = (e) => {
        return setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            !login ? signUpUser() : signInUser();
            navigate('/');
        } else {
            setValidForm(false);
        }
    };

    return(
        <>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <h2>
                            {login ? 'Sign Up' : 'Login'}
                        </h2>
                    </Grid>
                    {login ? (
                        <SignUp
                            handlerChange={handlerChange}
                            handleSubmit={handleSubmit}
                            formState={formState}
                            setLogin={setLogin}
                        />)
                    : (
                        <SignIn
                        handlerChange={handlerChange}
                        handleSubmit={handleSubmit}
                        formState={formState}
                        setLogin={setLogin}
                        />
                    )}
                </Paper>
            </Grid>
        </>
    );
};

export default Account;
