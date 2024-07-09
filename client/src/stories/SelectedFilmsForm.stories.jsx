import React from 'react';
import { Form } from 'react-final-form';
import { IntlProvider } from 'react-intl';
import { action } from '@storybook/addon-actions';

import SelectedFilmsForm from '../components/selectedFilms/SelectedFilmsForm';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../assets/theme';
import { MemoryRouter } from 'react-router-dom';

const messages = {
    specify_list_name: 'Specify list name',
};

export default {
    title: 'Forms/SelectedFilms',
    component: SelectedFilmsForm,
};

const onSubmit = (values) => {
    action('Form submitted')(values);
    // Add your form submission logic here, e.g., make an API call
    // You can also console log the values to verify they are correct
    console.log('Form values:', values);
};

const Template = (args) => (
    <IntlProvider locale="en" messages={messages}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <Form
                    onSubmit={onSubmit} // Ensure onSubmit function is passed here
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <SelectedFilmsForm {...args} />
                        </form>
                    )}
                />
            </MemoryRouter>
        </ThemeProvider>
    </IntlProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    onSubmit: (selectedFilm) => console.log(selectedFilm),
};
