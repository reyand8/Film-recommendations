import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from './index';
import { isValid, validateSignUp } from '../validation';

jest.mock('../validation', () => ({
    validateSignUp: jest.fn(),
    isValid: jest.fn(),
}));

const messages = {
    'auth.sign_in': 'Sign In',
    'auth.sign_up': 'Sign Up',
    'auth.auth_question': 'Do you have an account?',
    'auth.remember_me': 'Remember me',
    'auth.forgot_password': 'Forgot password',
};

const mockHandleSubmit = jest.fn();
const mockSetLogin = jest.fn();
const mockHandlerChange = jest.fn();
const formState = { username: '', email: '', password: '' };

describe('Sign up', () => {

    beforeEach(() => {
        validateSignUp.mockClear();
        isValid.mockClear();
        mockHandleSubmit.mockClear();
        mockSetLogin.mockClear();
        mockHandlerChange.mockClear();
    });

    const renderWithIntl = (component) => {
        return render(
            <IntlProvider locale="en-us" messages={messages}>
                {component}
            </IntlProvider>
        );
    };

    test('should render SignUp', () => {
        renderWithIntl(
            <SignUp formState={formState}
                    handlerChange={mockHandlerChange}
                    handleSubmit={mockHandleSubmit}
                    setLogin={mockSetLogin}
            />
        );

        expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
    });

    test('should submit valid form', () => {
        validateSignUp.mockReturnValue({ username: '', email: '', password: '' });
        isValid.mockReturnValue(true);
        renderWithIntl(
            <SignUp formState={formState}
                    handlerChange={mockHandlerChange}
                    handleSubmit={mockHandleSubmit}
                    setLogin={mockSetLogin}
            />
        );

        fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'mytest' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });
        fireEvent.submit(screen.getByRole('button', { name: /Sign Up/i }));

        expect(validateSignUp).toHaveBeenCalledWith(formState);
        expect(isValid).toHaveBeenCalledWith({ username: '', email: '', password: '' });
        expect(mockHandleSubmit).toHaveBeenCalled();
    });

    test('should return errors', () => {
        const errors = {
            username: 'Username is required',
            email: 'Invalid email',
            password: 'Password is required',
        };

        validateSignUp.mockReturnValue(errors);
        isValid.mockReturnValue(false);

        renderWithIntl(
            <SignUp formState={formState}
                    handlerChange={mockHandlerChange}
                    handleSubmit={mockHandleSubmit}
                    setLogin={mockSetLogin}
            />
        );

        fireEvent.submit(screen.getByRole('button', { name: /Sign Up/i }));

        expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
        expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });

    test('should call setLogin when SignIn button is clicked', () => {
        renderWithIntl(
            <SignUp formState={formState}
                    handlerChange={mockHandlerChange}
                    handleSubmit={mockHandleSubmit}
                    setLogin={mockSetLogin} />
        );

        fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

        expect(mockSetLogin).toHaveBeenCalled();
    });
});
