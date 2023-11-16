import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input Component', () => {
    test('renders input with correct type and placeholder', () => {
        render(<Input type="text" value="" onChange={() => {}} placeholder="Enter text" id="test1"/>);
        const inputElement = screen.getByPlaceholderText('Enter text');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'text');
    });

    test('displays the correct value', () => {
        render(<Input type="text" value="Test Value" onChange={() => {}} id="test2"/>);
        expect(screen.getByDisplayValue('Test Value')).toBeInTheDocument();
    });

    test('calls onChange prop when input value is changed', () => {
        const handleChange = jest.fn();
        render(<Input type="text" value="" onChange={handleChange} id="test3"/>);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('displays error message when error prop is provided', () => {
        const errorMessage = 'Error message';
        render(<Input type="text" value="" onChange={() => {}} error={errorMessage} id="test4"/>);
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    test('applies error styling when error prop is provided', () => {
        const errorMessage = 'Error message';
        render(<Input type="text" value="" onChange={() => {}} error={errorMessage} id="test5"/>);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveClass('inputError'); // Убедитесь, что класс inputError существует в вашем CSS
    });
});
