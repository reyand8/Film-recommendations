import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {isValid, validateSignUp} from '../validation';
import SignUp from './index';

jest.mock('../validation', () => ({
    validateSignUp: jest.fn(),
    isValid: jest.fn(),
}));

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

    test('should render SignUp', () => {
        render(<SignUp formState={formState} handlerChange={mockHandlerChange} handleSubmit={mockHandleSubmit} setLogin={mockSetLogin} />);

        expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
    });

    test('should submit valid form', () => {
        validateSignUp.mockReturnValue({ username: '', email: '', password: ''});
        isValid.mockReturnValue(true);
        render(<SignUp formState={formState} handlerChange={mockHandlerChange} handleSubmit={mockHandleSubmit} setLogin={mockSetLogin} />);

        fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'mytest' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });
        fireEvent.submit(screen.getByRole('button', { name: /Sign Up/i }));

        expect(validateSignUp).toHaveBeenCalledWith(formState);
        expect(isValid).toHaveBeenCalledWith({ username: '', email: '', password: '' });
        expect(mockHandleSubmit).toHaveBeenCalled();
    });

    test('should return errors', () => {
        const errors = { username: 'Username is required', email: 'Invalid email', password: 'Password is required' };
        validateSignUp.mockReturnValue(errors);
        isValid.mockReturnValue(false);

        render(<SignUp formState={formState} handlerChange={mockHandlerChange} handleSubmit={mockHandleSubmit} setLogin={mockSetLogin} />);

        fireEvent.submit(screen.getByRole('button', { name: /Sign Up/i }));

        expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
        expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });

    test('should call setLogin when SignIn button is clicked', () => {
        render(<SignUp formState={formState} handlerChange={mockHandlerChange} handleSubmit={mockHandleSubmit} setLogin={mockSetLogin} />);

        fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

        expect(mockSetLogin).toHaveBeenCalled();
    });
});