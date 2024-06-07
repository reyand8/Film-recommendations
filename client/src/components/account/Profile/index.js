import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Link, TextField} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import MovieIcon from '@mui/icons-material/Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {FormattedMessage} from 'react-intl';
import Dropzone from 'react-dropzone';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useMutation} from '@apollo/client';

import defaultImage from '../../../assets/img/default-image.png';
import theme from '../../../assets/theme';
import {DELETE_USER, UPDATE_USER, UPLOAD_IMAGE} from '../../../gqlClient/mutations/mutations';
import {AUTH_TOKEN} from '../../../common/const';
import ConfirmDelete from '../../status/ConfirmDeleteAccount';


const profileStyle={padding :20, minHeight:'58vh', maxWidth: 660, margin:'60px auto'};

const Profile = ({data, numberOfFilms}) => {
    const navigate = useNavigate();
    const [editForm, setEditForm] = useState({
        email:  '',
        username: '',
    });
    const [openConfirm, setOpenConfirm] = useState(false);

    const [link, setLink] = useState('');
    const [updateImage] = useMutation(UPLOAD_IMAGE);
    const [updateUser] = useMutation(UPDATE_USER);
    const [deleteUser] = useMutation(DELETE_USER, {
        onCompleted: () => {
            localStorage.removeItem(AUTH_TOKEN);
            navigate('/');
        },
        onError: (error) => {
            console.error('Error deleting user:', error);
        },
    });

    useEffect(() => {
        if (data && data.user) {
            const {email, username} = data.user;
            setEditForm({
                email: email, username: username,
            });
        }
    }, [data]);

    useEffect(() => {
        if (numberOfFilms.length > 0) {
            const link = `http://${window.location.host}/recommend?title=&ids=${numberOfFilms.join()}`;
            setLink(link);
        } else {
            setLink('');
        }
    }, [numberOfFilms]);

    const handleChange = (e) => {
       const {name, value} = e.target;
       setEditForm({
           ...editForm,
           [name]: value,
       });
    };

    const handleDeleteAccount = async () => {
        try {
            await deleteUser();
            setOpenConfirm(true);
        } catch(error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser({ variables:
                    {
                        email: editForm.email,
                        username: editForm.username },
            });
        } catch(error) {
            console.log(error);
        }
    };

    const handleDrop = async (acceptedFiles) => {
        const file = acceptedFiles[0];
        try {
            await updateImage({ variables: { file } });
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const onLogOutClick = () => {
        localStorage.removeItem(AUTH_TOKEN);
        navigate('/');
    };

    return(
        <>
            {openConfirm ? <ConfirmDelete handleDeleteAccount={handleDeleteAccount} setOpenConfirm={setOpenConfirm}/> : (
            <Paper elevation={10} style={profileStyle}>
                <Grid align="center">
                    <h2>Profile</h2>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box>
                            {!data.user.image ? <img src={defaultImage} alt="defaultImage"/> :
                                <img src={data.image} alt="defaultImage"/>
                            }
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Accordion sx={{
                                    maxWidth: '440px',
                                    border: 0.7,
                                    borderColor: 'rgba(0, 0, 0, 0.6);',
                                    marginTop: '50px'}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header">
                                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                                            <Box>
                                                <EditIcon sx={{fill: '#858584'}}/>
                                            </Box>
                                            <Box sx={{marginLeft: '10px'}}>
                                                Edit Profile
                                            </Box>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ height: '240px'}}>
                                        <Box
                                            component="form"
                                            onSubmit={handleSubmit}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: ' space-between',
                                                height: '150px',
                                            }}>

                                            <TextField
                                                id="standard-basic"
                                                label="Email"
                                                name="email"
                                                value={editForm.email}
                                                variant="standard"
                                                onChange={handleChange}
                                                sx={{mx: '20px'}}
                                            />
                                            <TextField
                                                id="standard-basic"
                                                label="Username"
                                                name="username"
                                                value={editForm.username}
                                                variant="standard"
                                                onChange={handleChange}
                                                sx={{mx: '20px'}}
                                            />
                                            <Box>
                                                <Button variant="contained" type="submit" size="large"
                                                        sx={{marginTop: '16px'}}>
                                                    <FormattedMessage id="filters.submit"/>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </AccordionDetails>
                                    <Box>
                                        <Box sx={{ height: '240px'}}>
                                            <Typography>
                                                Add Profile Image
                                            </Typography>
                                            <Box
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: ' space-between',
                                                    height: '150px',
                                                    width: '240px',
                                                }}>
                                                <Dropzone disabled={true} onDrop={handleDrop}>
                                                    {({ getRootProps, getInputProps }) => (
                                                        <div {...getRootProps()}
                                                             style={{ border: '1px dashed grey', padding: '20px' }}>
                                                            <input {...getInputProps()} />
                                                            <p>
                                                                Drag and drop some files here, or click to select files
                                                            </p>
                                                        </div>
                                                    )}
                                                </Dropzone>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Accordion>
                                <Accordion sx={{
                                    maxWidth: '440px',
                                    border: 0.7,
                                    borderColor: 'rgba(0, 0, 0, 0.6);',
                                    marginTop: '10px'}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header">
                                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                                            <Box>
                                                <MovieIcon sx={{fill: '#858584'}}/>
                                            </Box>
                                            <Box sx={{marginLeft: '10px'}}>
                                                Selected films
                                            </Box>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ height: '240px', display: 'flex', flexDirection: 'column'}}
                                    >
                                        <Typography sx={{fontSize: '20px'}}>
                                            There are {numberOfFilms.length} films
                                        </Typography>

                                        <Link href={link} onClick={(event) => {
                                            if (numberOfFilms.length <= 0) {
                                                event.preventDefault();
                                            }}} passHref>
                                            <Button disabled={numberOfFilms.length <= 0} sx={{ background: theme.palette.primary.light}}
                                                    variant="contained" size="large">
                                                <Typography>Open selected films</Typography>
                                            </Button>
                                        </Link>

                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>
                        <Box sx={{marginTop: '98px', display: 'flex', justifyContent: 'space-between'}}>
                            <Button variant="contained" type="submit" size="large"
                                    sx={{ background: theme.palette.primary.contrastText}}
                                    onClick={() => setOpenConfirm(true)}>
                                <DeleteIcon sx={{fill: theme.palette.text.primary}}/>
                                <Typography sx={{color: theme.palette.text.primary}}>Delete account</Typography>
                            </Button>
                            <Link>
                                <Button variant="contained" type="submit" size="large"
                                        onClick={onLogOutClick}>
                                    <LogoutIcon/>
                                    <Typography sx={{paddingLeft: '14px'}}>Log out</Typography>
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Paper>
            )}
        </>
    );
};

export default Profile;
