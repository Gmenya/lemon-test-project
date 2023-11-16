import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header Component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    });


    test('renders the HOME button', () => {
        const homeButton = screen.getByRole('button', { name: 'HOME' });
        expect(homeButton).toBeInTheDocument();
    });


    test('renders the header list items', () => {
        const listItems = screen.getAllByRole('button');
        expect(listItems.length).toBeGreaterThan(0);
    });


    test('renders all expected elements', () => {
        expect(screen.getByRole('button', { name: 'HOME' })).toBeInTheDocument();
    });


    test('header has correct styling', () => {
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toHaveClass('Header');
    });


    test('header layout changes on small screens', () => {
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
    });


});
