import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
    test('renders button with text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies header item button style when isMenuItem is true', () => {
        render(<Button isMenuItem>Menu Item</Button>);
        const button = screen.getByText('Menu Item');
        expect(button).toHaveClass('header-item-button');
    });

    test('applies default button style when isMenuItem is false', () => {
        render(<Button>Default Button</Button>);
        const button = screen.getByText('Default Button');
        expect(button).toHaveClass('button');
    });
});
