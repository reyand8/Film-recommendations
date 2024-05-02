import {useState, useCallback, useContext} from 'react';

import {MAX_SELECTED_FILMS} from '../../const';
import {AppContext} from '../../providers/appContext';



export const useFilms = () => {
    const [selectedFilms, setSelectedFilms] = useState([]);
    const { dispatch } = useContext(AppContext);

    const selectFilm = useCallback((film) => {
        const length = selectedFilms.length;
        const isNewFilm = !selectedFilms.find(({ id }) => id === film.id);
        if (isNewFilm && length < MAX_SELECTED_FILMS) {
            setSelectedFilms([...selectedFilms, film ]);
            setLocalStorageFilms(film.id);
        }
    }, [selectedFilms]);

    const deleteFilm = useCallback((film) => {
        setSelectedFilms(selectedFilms.filter(({id}) => id !== film.id));
        deleteLocalStorageFilms(film.id);
    }, [selectedFilms]);

    const deleteLocalStorageFilms = useCallback((film) => {
        dispatch({
            type: 'deleteSelectedFilms',
            film,
        });
    }, []);

    const setLocalStorageFilms = useCallback((film) => {
        dispatch({
            type: 'setSelectedFilms',
            film,
        });
    }, []);


    return {
        selectedFilms,
        selectFilm,
        deleteFilm,
    };
};