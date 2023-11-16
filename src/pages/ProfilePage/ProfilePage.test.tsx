import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProfilePage } from './ProfilePage';

describe('ProfilePage Component', () => {
    test('renders the component', () => {
        render(<ProfilePage />);
        const profileElement = screen.getByText('ProfilePage');
        expect(profileElement).toBeInTheDocument();
    });

    test('has the correct class name', () => {
        render(<ProfilePage />);
        const profileElement = screen.getByText('ProfilePage');
        expect(profileElement).toHaveClass('ProfilePage');
    });
});
