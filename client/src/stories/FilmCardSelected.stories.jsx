import React from 'react';
import { CardFilmSelected } from '../components';

import { films } from './stub';


export default {
    title: 'Card/Film card selected',
    component: CardFilmSelected,
};

const Template = (args) => <CardFilmSelected {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    film: films[0],
};