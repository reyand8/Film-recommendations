import React from 'react';
import { IntlProvider } from 'react-intl';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';

import theme from '../assets/theme';
import CardSingleFilm from '../components/card/CardSingleFilm';
import {films} from './stub';


const messages = {
    'singlePage.duration': 'Duration',
    'singlePage.release_date': 'Release Date',
    'singlePage.genres': 'Genres',
};

export default {
    title: 'Card/CardSingleFilm',
    component: CardSingleFilm,
};

const Template = (args) =>
    (
        <IntlProvider locale="en" messages={messages}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <MemoryRouter>
                    <CardSingleFilm {...args} />;
                </MemoryRouter>
            </ThemeProvider>
        </IntlProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    film: films[1],
};