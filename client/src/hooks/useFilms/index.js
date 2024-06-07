import {useState, useCallback} from 'react';

import {MAX_SELECTED_FILMS, STORAGE_SELECTED_FILMS_KEY} from '../../common/const';
import {deleteIdsFromStorage, saveIdsToStorage} from '../../utils/localStorage';


export const useFilms = () => {
    const [selectedFilms, setSelectedFilms] = useState([]);

    const selectFilm = useCallback((film) => {
        const length = selectedFilms.length;
        const isNewFilm = !selectedFilms.find(({ id }) => id === film.id);
        if (isNewFilm && length < MAX_SELECTED_FILMS) {
            setSelectedFilms([...selectedFilms, film ]);
            setLocalStorageFilms(film.id);
        }
    }, [selectedFilms]);

    const deleteFilm = useCallback((film) => {
        deleteLocalStorageFilms(film.id);
        setSelectedFilms(selectedFilms.filter(({id}) => id !== film.id));
    }, [selectedFilms]);

    const setLocalStorageFilms = ((film) => {
        saveIdsToStorage(STORAGE_SELECTED_FILMS_KEY, film);
    });

    const deleteLocalStorageFilms = ((film) => {
        deleteIdsFromStorage(STORAGE_SELECTED_FILMS_KEY, film);
    });

    return {
        selectedFilms,
        setSelectedFilms,
        selectFilm,
        deleteFilm,
    };
};