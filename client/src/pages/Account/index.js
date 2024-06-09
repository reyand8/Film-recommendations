import {Grid} from '@mui/material';
import Paper from '@mui/material/Paper';

import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {useMutation, useQuery} from '@apollo/client';

import SignIn from '../../components/account/SignIn';
import SignUp from '../../components/account/SignUp';
import Profile from '../../components/account/Profile';
import Loading from '../../components/status/Loading';
import {AUTH_TOKEN} from '../../common/const';
import {GET_USER} from '../../gqlClient/quieries/queries';
import {SIGN_UP_MUTATION, SIGN_IN_MUTATION, UPDATE_USER} from '../../gqlClient/mutations/mutations';
import {saveIdsToStorage} from '../../utils/localStorage';
import {STORAGE_SELECTED_FILMS_KEY} from '../../common/const';


const paperStyle={padding :20, minHeight:'42vh', maxWidth: 360, margin:'60px auto'};


const Account = () => {
    const navigate = useNavigate();
    const  [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        image: '',
    });
    const [login, setLogin] = useState(false);
    const [validForm, setValidForm] = useState(false);
    const [numberOfFilms, setNumberOfFilms] = useState([]);
    const {loading, error, data} = useQuery(GET_USER);

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

    const [updateUser] = useMutation(UPDATE_USER);


    useEffect(() => {
        const fetchAndUpdateSelectedList = async () => {
            const allSelectedFilms = await data?.user.selectedFilms;
            try {
                const localStorageFilms = JSON.parse(localStorage.getItem('selectedFilms'));
                if (localStorageFilms) {
                    await updateSelectedList(localStorageFilms);
                } else if (allSelectedFilms) {
                    const parsedFilms = JSON.parse(allSelectedFilms.replace(/'/g, '"'));
                    saveIdsToStorage(STORAGE_SELECTED_FILMS_KEY, parsedFilms);
                    await updateSelectedList(parsedFilms);
                }
                const storedFilms = localStorage.getItem('selectedFilms');
                if (storedFilms) {
                    setNumberOfFilms(JSON.parse(storedFilms));
                }
            } catch (error) {
                console.error('Error updating selected list:', error);
            }
        };
        fetchAndUpdateSelectedList().then(() => {})
            .catch(error => {
                console.error('Error updating selected list:', error);
            });
    }, [data]);

    const updateSelectedList = async (dataList) => {
        try {
            if (dataList) {
                const newList = [...new Set([...dataList])].slice(0,20);
                await updateUserList(newList);
            }
        } catch (error) {
            console.error('Error updating selected list:', error);
        }
    };

    const updateUserList = async(newList) => {
        let result = '[' + newList.map(item => `'${item.toString()}'`).join(', ') + ']';
        try {
            await updateUser({
                variables: {
                    username: formState.username,
                    email: formState.email,
                    selectedFilms: result },
            });
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <Loading/>;
    }

    const handlerChange = (e) => {
        return setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            await (login ? signUpUser() : signInUser());
            navigate('/account');
            window.location.reload();
        } else {
            setValidForm(false);
        }
    };

    return(
        <>
            {
                data ? (
                    <Profile data={data} numberOfFilms={numberOfFilms}/>
                ) : (
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <h2>
                                {login ? <FormattedMessage id="auth.sign_up"/> : <FormattedMessage id="auth.sign_in"/>}
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
                </Grid>)
            }
        </>
    );
};

export default Account;
