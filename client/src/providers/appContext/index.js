import React, { useReducer, createContext } from 'react';

import {useDefaultContext} from './defaultContext';
import {saveIdsToStorage, saveToStorage} from '../../utils/localStorage';
import {STORAGE_LOCALE_KEY, STORAGE_SELECTED_FILMS_KEY} from '../../const';

const AppContext = createContext();


let reducer = (state, action) => {
    switch (action.type) {
        case 'setLocale':
            saveToStorage(STORAGE_LOCALE_KEY, action.locale);
            return { ...state, locale: action.locale };
        case 'setSelectedFilms':
            saveIdsToStorage(STORAGE_SELECTED_FILMS_KEY, action.film);
            return {...state, selectedFilms: action.film};
    }
};

const AppContextProvider = ({children}) => {
    const defaultContext = useDefaultContext();
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };