import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignIn from './index';
import { validateSignIn, isValid } from '../validation';

jest.mock('../validation', () => ({
    validateSignIn: jest.fn(),
    isValid: jest.fn(),
}))

const mockHandleSubmit = jest.fn();
const mockSetLogin = jest.fn();
const mockHandlerChange = jest.fn();
const formState = { email: '', password: '' };

describe('Sign in', () => {

    beforeEach(() => {
        validateSignIn.mockClear();
        isValid.mockClear();
        mockHandleSubmit.mockClear();
        mockSetLogin.mockClear();
        mockHandlerChange.mockClear();
    })

    test('should render SignIn ', () => {
        render(<SignIn formState={formState} handlerChange={mockHandlerChange} handleSubmit={mockHandleSubmit} setLogin={mockSetLogin} />);

        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
    });

    test('should submit valid form', () => {
        validateSignIn.mockReturnValue({email: '', password: ''})
        isValid.mockReturnValue(true)
        render(<SignIn formState={formState} handlerChange={mockHandlerChange} handleSubmit={mockHandleSubmit} setLogin={mockSetLogin} />);

        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });
        fireEvent.submit(screen.getByRole('button', { name: /Sign In/i }));

        expect(validateSignIn).toHaveBeenCalledWith(formState);
        expect(isValid).toHaveBeenCalledWith({ email: '', password: '' });
        expect(mockHandleSubmit).toHaveBeenCalled();
    })

    test('should return errors', () => {
        const errors = { email: 'Invalid email', password: 'Password is required' };
        validateSignIn.mockReturnValue(errors)
        isValid.mockReturnValue(false)
        render(<SignIn formState={formState} handlerChange={mockHandlerChange} handleSubmit={mockHandleSubmit} setLogin={mockSetLogin} />);

        fireEvent.submit(screen.getByRole('button', { name: /Sign In/i }));

        expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
        expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    })

    test('should call setLogin when Registration button is clicked', () => {
        render(<SignIn formState={formState} handlerChange={mockHandlerChange} handleSubmit={mockHandleSubmit} setLogin={mockSetLogin} />);

        fireEvent.click(screen.getByRole('button', { name: /Registration/i }));

        expect(mockSetLogin).toHaveBeenCalled();
    });
})