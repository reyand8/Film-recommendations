import React from 'react';
import { IntlProvider } from 'react-intl';
import {MemoryRouter} from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';

import theme from '../assets/theme';
import { films } from './stub';
import {CardFilmSelected} from '../components';


export default {
    title: 'Card/CardFilmSelected',
    component: CardFilmSelected,
};

const messages = {
    delete: 'Delete',
};

const Template = (args) => (
    <IntlProvider locale="en" messages={messages}>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <CardFilmSelected {...args} />
            </MemoryRouter>
        </ThemeProvider>
    </IntlProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    film: films[0],
    onCardDelete: (selectedFilm) => console.log(selectedFilm),
};