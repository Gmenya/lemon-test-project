import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LoginForm } from './LoginForm';
import '@testing-library/jest-dom';
import store from '../../app/store/store';

jest.mock('axios', () => ({
    post: jest.fn(() => Promise.resolve({ data: {} })),
}));
const queryClient = new QueryClient();

describe('LoginForm', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <LoginForm />
                    </Router>
                </QueryClientProvider>
            </Provider>
        );
    });

    test('renders the form with all fields and a submit button', () => {
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/i want to receive updates via email/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /start the course/i })).toBeInTheDocument();
    });

    test('allows entering email and password', () => {
        const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        expect(emailInput.value).toBe('test@example.com');

        const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
    });

    // Другие тесты...
});
