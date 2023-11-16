import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import { loginReducer } from '../../features/LoginForm/model/slice';
import { MainPage } from './MainPage';
import { mockText } from '../../shared/constants/infoMockText';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';


jest.mock('axios', () => ({
    post: jest.fn(() => Promise.resolve({ data: {} })),
}));

const queryClient = new QueryClient();

const testStore = configureStore({
    reducer: {
        login: loginReducer,
    },
});

describe('MainPage Component', () => {
    beforeEach(() => {
        render(
            <Provider store={testStore}>
                <Router>
                    <QueryClientProvider client={queryClient}>
                        <MainPage />
                    </QueryClientProvider>
                </Router>
            </Provider>
        );
    });
    test('renders the LoginForm component', () => {
        const loginFormElement = screen.getByTestId('login-form');
        expect(loginFormElement).toBeInTheDocument();
    });

    test('displays the mock text', () => {
        const mockTextElement = screen.getByText(mockText);
        expect(mockTextElement).toBeInTheDocument();
    });

    test('has the correct class names', () => {
        const mainPageElement = screen.getByTestId('main-page');
        const infoElement = screen.getByTestId('info-text');

        expect(mainPageElement).toHaveClass('login');
        expect(infoElement).toHaveClass('info');
    });
});
