import { configureStore } from '@reduxjs/toolkit';
import {getLoginPassword} from "./getLoginPassword";

describe('getLoginPassword selector', () => {
    test('should return the password from the state', () => {
        const initialState = {
            login: {
                password: 'testPassword',
            },
        };
        const store = configureStore({
            reducer: (state) => state,
            preloadedState: initialState,
        });
        const password = getLoginPassword(store.getState());
        expect(password).toBe('testPassword');
    });

    test('should return an empty string if password is not present in the state', () => {

        const initialState = {};


        const store = configureStore({
            reducer: (state) => state,
            preloadedState: initialState,
        });


        const password = getLoginPassword(store.getState());


        expect(password).toBe('');
    });
});
