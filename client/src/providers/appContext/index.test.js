import React, {useCallback} from 'react';
import {MemoryRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {fireEvent} from '@storybook/test';
import MenuItem from '@mui/material/MenuItem';

import { AppContextProvider, AppContext } from './index';
import {LOCALES} from '../../common/const';


describe('App context provider', () => {
    test('should be initial state', () => {
        const TestComponent = () => {
            const {state} = React.useContext(AppContext);
            return <MenuItem>{state.locale}</MenuItem>;
        };
        render(
            <MemoryRouter>
                <AppContextProvider>
                    <TestComponent></TestComponent>
                </AppContextProvider>
            </MemoryRouter>
        );

        expect(screen.getByText('en-us')).toBeInTheDocument();
    });

    test('should dispatch actions and updates the state', () => {
        const TestComponent = () => {
            const { state, dispatch } = React.useContext(AppContext);
            const handleLanguageClick = (language) => {
                setLanguage(language);
                handleClose();
            };
            const setLanguage = useCallback((locale) => {
                dispatch({
                    type: 'setLocale',
                    locale,
                });
            }, [dispatch]);
            const handleClose = () => {};

            return (
                <MenuItem onClick={() => handleLanguageClick(LOCALES.GERMAN)}>
                    DE
                </MenuItem>
            );
        };
        render(
            <MemoryRouter>
                <AppContextProvider>
                    <TestComponent />
                </AppContextProvider>
            </MemoryRouter>
        );

        expect(screen.getByText('DE')).toBeInTheDocument();
        const button = screen.getByText('DE');
        fireEvent.click(button);

        expect(screen.getByText('DE')).toBeInTheDocument();
    });
});