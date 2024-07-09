import React from 'react';
import { IntlProvider } from 'react-intl';
import {MemoryRouter} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import '../index.css';
import theme from '../assets/theme';
import {CardFilm} from '../components';
import {films} from './stub';



export default {
  title: 'Card/CardFilm',
  component: CardFilm,
};

const messages = {
    'my.message.id': 'Hello!',
};

const Template = (args) => (
    <IntlProvider locale="en" messages={messages}>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <CardFilm {...args} />
            </MemoryRouter>
        </ThemeProvider>
    </IntlProvider>
);


export const Primary = Template.bind({});
Primary.args = {
    film: films[0],
    onCardSelect: (selectedFilm) => console.log(selectedFilm),
    isPreviewMode: false,
};