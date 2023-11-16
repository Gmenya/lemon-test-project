import {configureStore, ThunkAction, Action, combineReducers} from "@reduxjs/toolkit";
import {loginReducer} from "../../features/LoginForm/model/slice";

const appReducers = combineReducers({
    login:loginReducer
});


const store = configureStore({
    reducer: appReducers,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    undefined,
    Action<string>
>;

export default store;
