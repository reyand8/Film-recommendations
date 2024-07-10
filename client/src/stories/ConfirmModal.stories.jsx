import React from 'react';
import { IntlProvider } from 'react-intl';


import ConfirmModal from '../components/selectedFilms/ConfirmModal';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../assets/theme';
import '../index.css';
import { MemoryRouter } from 'react-router-dom';


const messages = {
    share_with_friends: 'Share with Friends',
    copied: 'Copied',
};

export default {
    title: 'Confirm/ConfirmModal',
    component: ConfirmModal,
};

const Template = (args) => (
        <IntlProvider locale="en" messages={messages}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <MemoryRouter>
                    <ConfirmModal {...args} />
                </MemoryRouter>
            </ThemeProvider>
        </IntlProvider>
);

export const Primary = Template.bind({});

Primary.args = {
    open: true,
    title: 'My favourite movies',
    url: 'http://localhost:3000/recommend?title="my movies"&ids=232,434',
    onClose: () => {},
};