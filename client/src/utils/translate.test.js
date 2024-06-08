import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';

import translate from './translate';


jest.mock('react-intl', () => ({
    ...jest.requireActual('react-intl'),
    FormattedMessage: jest.fn(() => <div>Translated My Message</div>),
}));

describe('translate message', () => {
    test('should render FormattedMessage with id and values', () => {
        const id = 'myMessage';
        const values = {name: 'Reyand'};
        const { getByText } = render(
            <IntlProvider locale="en-us">
                <div>{translate(id, values)}</div>
            </IntlProvider>
        );

        expect(FormattedMessage).toHaveBeenCalledWith(
            expect.objectContaining({ id, values }),
            {}
        );

        expect(getByText('Translated My Message')).toBeInTheDocument();
    });

    test('should render FormattedMessage without values', () => {
        const id = 'myMessage';
        const { getByText } = render(
            <IntlProvider locale="en-us">
                <div>{translate(id)}</div>
            </IntlProvider>
        );

        expect(FormattedMessage).toHaveBeenCalledWith(
            expect.objectContaining({ id}),
            {}
        );

        expect(getByText('Translated My Message')).toBeInTheDocument();
    });
});