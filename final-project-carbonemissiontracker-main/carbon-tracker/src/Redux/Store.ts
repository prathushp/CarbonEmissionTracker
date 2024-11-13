// Redux/store.ts
/************
 * A customized store for Redux
 * author: Zehao Song
 ************/
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserRedux';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;