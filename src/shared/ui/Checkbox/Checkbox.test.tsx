import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
    test('renders checkbox with label', () => {
        render(<Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />);
        expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
    });

    test('checkbox is checked when checked prop is true', () => {
        render(<Checkbox label="Test Checkbox" checked={true} onChange={() => {}} />);
        expect(screen.getByLabelText('Test Checkbox')).toBeChecked();
    });

    test('checkbox is not checked when checked prop is false', () => {
        render(<Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />);
        expect(screen.getByLabelText('Test Checkbox')).not.toBeChecked();
    });

    test('calls onChange prop when checkbox state is changed', () => {
        const handleChange = jest.fn();
        render(<Checkbox label="Test Checkbox" checked={false} onChange={handleChange} />);
        fireEvent.click(screen.getByLabelText('Test Checkbox'));
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
