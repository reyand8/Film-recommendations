import React from 'react';
import ConfirmModal from '../components/selectedFilms/ConfirmModal';

export default {
    title: 'Confirm/ConfirmModal component',
    component: ConfirmModal,
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    open: true,
    title: 'My favourite movies',
    url: 'http://localhost:3000/recommend?title="my movies"&ids=232,434',
    onClose: () => {},
};