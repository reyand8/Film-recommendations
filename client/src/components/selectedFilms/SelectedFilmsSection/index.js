import React from 'react';
import {useState} from 'react';
import {FormattedMessage} from 'react-intl';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import selectedFilmEmpty from '../../../assets/img/selected_film_empty.png';
import CardFilmSelected from '../../card/CardFilmSelected';
import SelectedFilmsForm from '../SelectedFilmsForm';
import ConfirmModal from '../ConfirmModal';
import Loading from '../../status/Loading';



const SelectedFilms = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: '760px',
    position: 'sticky',
    top: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
}));

const FilmsList = styled(Stack)(({theme}) => ({
    height: '100%',
    overflowY: 'scroll',
}));

const NoFilms = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
}));

const SelectedFilmsSection = ({ selectedFilms, error, loading, deleteFilm }) => {
    const [listName, setListName] = useState('');
    const [link, setLink] = useState('');
    const onSubmit = ({ listName }) => {
        const ids = selectedFilms.map(({id}) => id);
        const link = `${window.location.host}/recommend?title=${listName}&ids=${ids.join()}`;
        setLink(link);
        setListName(listName);
    };

    const onCloseConfirmModal = () => {
        setLink('');
    };

    if (loading) {
        return <Loading/>;
    }


    if (!selectedFilms.length || error) {
        return (
            <SelectedFilms>
                <NoFilms>
                    <Box component="img"
                        sx={{
                            width: '60%',
                            opacity: '.6',
                        }}
                        alt="No images."
                        src={selectedFilmEmpty}
                    />
                    <Typography variant="h4" mt={2}>
                        <FormattedMessage id="no_selected_films"/>
                    </Typography>
                </NoFilms>
            </SelectedFilms>
        );
    }

    return (
        <SelectedFilms>
            <FilmsList spacing={2}>
                {selectedFilms.map((film) => (
                    <CardFilmSelected key={film.id}
                                      film={film}
                                      onCardDelete={deleteFilm}
                    />
                ))}
            </FilmsList>
            <Box pt={2}>
                <SelectedFilmsForm onSubmit={onSubmit}/>
            </Box>
            <ConfirmModal
                url={link}
                title={listName}
                open={!!link}
                onClose={onCloseConfirmModal}/>
        </SelectedFilms>
    );
};

export default SelectedFilmsSection;