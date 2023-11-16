import { configureStore } from '@reduxjs/toolkit';
import {getLoginEmail} from "./getLoginEmail";

describe('getLoginEmail selector', () => {
    test('should return the email from the state', () => {
        const initialState = {
            login: {
                email: 'test@example.com',
            },
        };
        const store = configureStore({
            reducer: (state) => state,
            preloadedState: initialState,
        });
        const email = getLoginEmail(store.getState());
        expect(email).toBe('test@example.com');
    });

    test('should return an empty string if email is not present in the state', () => {
        const initialState = {};
        const store = configureStore({
            reducer: (state) => state,
            preloadedState: initialState,
        });
        const email = getLoginEmail(store.getState());
        expect(email).toBe('');
    });
});
