import React from 'react';

import { SelectedFilmsForm } from '../components'

export default {
    title: 'Forms/SelectedMovies',
    component: SelectedFilmsForm
};

const Template = (args) => <SelectedFilmsForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};