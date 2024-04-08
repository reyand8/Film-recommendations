import React from 'react'

import {CardFilm} from "../components";
import {films} from './stub'

export default {
  title: 'Card/Film card',
  component: CardFilm,
};

const Template = (args) => <CardFilm {...args}/>

export const Primary = Template.bind({})

Primary.args = {
   film: films[0]
};