import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignIn from './index';
import { validateSignIn, isValid } from '../validation';
import {IntlProvider} from 'react-intl';


jest.mock('../validation', () => ({
    validateSignIn: jest.fn(),
    isValid: jest.fn(),
}));

const mockHandleSubmit = jest.fn();
const mockSetLogin = jest.fn();
const mockHandlerChange = jest.fn();
const formState = { email: '', password: '' };

const messages = {
    'auth.sign_in': 'Sign In',
    'auth.sign_up': 'Sign Up',
    'auth.auth_question': 'Do you have an account?',
    'auth.remember_me': 'Remember me',
    'auth.forgot_password': 'Forgot password',
};


describe('SignIn component', () => {
    beforeEach(() => {
        validateSignIn.mockClear();
        isValid.mockClear();
        mockHandleSubmit.mockClear();
        mockSetLogin.mockClear();
        mockHandlerChange.mockClear();
    });

    const renderWithIntl = (component) => {
        return render(
            <IntlProvider locale="en" messages={messages}>
                {component}
            </IntlProvider>
        );
    };

    test('renders SignIn component', () => {
        renderWithIntl(
            <SignIn
                formState={formState}
                handlerChange={mockHandlerChange}
                handleSubmit={mockHandleSubmit}
                setLogin={mockSetLogin}
            />
        );


        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    });

    test('submits valid form', () => {
        validateSignIn.mockReturnValue({ email: '', password: '' });
        isValid.mockReturnValue(true);

        renderWithIntl(
            <SignIn
                formState={formState}
                handlerChange={mockHandlerChange}
                handleSubmit={mockHandleSubmit}
                setLogin={mockSetLogin}
            />
        );

        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });

        fireEvent.submit(screen.getByRole('button', { name: /Sign In/i }));

        expect(validateSignIn).toHaveBeenCalledWith(formState);
        expect(isValid).toHaveBeenCalledWith({ email: '', password: '' });
        expect(mockHandleSubmit).toHaveBeenCalled();
    });
});