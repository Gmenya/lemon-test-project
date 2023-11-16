import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeaderListItem } from './HeaderListItem';


describe('HeaderListItem Component', () => {
    beforeEach(() => {
        render(<HeaderListItem />);
    });
    test('renders correctly', () => {
        const aboutButton = screen.getByRole('button', { name: 'ABOUT' });
        expect(aboutButton).toBeInTheDocument();
        const newsButton = screen.getByRole('button', { name: 'NEWS' });
        expect(newsButton).toBeInTheDocument();
        const contactsButton = screen.getByRole('button', { name: 'CONTACTS' });
        expect(contactsButton).toBeInTheDocument();
    });

    test('displays all options', () => {
        const options = ['ABOUT', 'NEWS', 'CONTACTS'];
        options.forEach(option => {
            expect(screen.getByRole('button', { name: option })).toBeInTheDocument();
        });
    });

    test('displays correct number of items', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3);
    });
});
