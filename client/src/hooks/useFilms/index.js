import { useState, useCallback } from 'react';

import {MAX_SELECTED_FILMS} from '../../const';


export const useFilms = () => {
    const [selectedFilms, setSelectedFilms] = useState([]);

    const selectFilm = useCallback((film) => {
        const length = selectedFilms.length;
        const isNewFilm = !selectedFilms.find(({ id }) => id === film.id);
        if (isNewFilm && length < MAX_SELECTED_FILMS) {
            setSelectedFilms([...selectedFilms, film ]);
        }
    }, [selectedFilms]);

    const deleteFilm = useCallback((film) => {
        setSelectedFilms(selectedFilms.filter(({id}) => id !== film.id));
    }, [selectedFilms]);

    return {
        selectedFilms,
        selectFilm,
        deleteFilm,
    };
};