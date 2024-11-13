/************
 * A Redux User service
 * author: Zehao Song
 ************/
import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../models/User';

interface UserState {
    user: User | null;
    userId: string | null;
}

//Initial state
const initialState: UserState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'), // Retrieve user data from local storage
    userId: localStorage.getItem('useId') // Changed 'userId' to 'useId'
}

// Async function for signIn
export const signIn = createAsyncThunk('user/signIn',
    async (args: {username:string, password:string}) => {
        try {
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(args),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const {user, useId} = await response.json(); // Changed 'userId' to 'useId'
            console.log(useId);

            return {user, useId}; // Changed 'userId' to 'useId'
        } catch (error) {
            throw error;
        }
    }
);

// Reducer
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signOut: (state) => {
            state.user = null;
            state.userId = null;
            localStorage.removeItem('user');
            localStorage.removeItem('useId'); // Changed 'userId' to 'useId'
        },
        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user){
                state.user = {...state.user, ...action.payload}
            }
        },
        loadUser: (state) => {
            // Get user and useId from local storage
            const user = localStorage.getItem("user");
            const useId = localStorage.getItem("useId"); // Changed 'userId' to 'useId'

            // If both user and useId exist, save them in Redux store
            if(user && useId) {
                state.user = JSON.parse(user);
                state.userId = useId; // Changed 'userId' to 'useId'
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.userId = action.payload.useId; // Changed 'userId' to 'useId'
            // save user and useId to local storage
            localStorage.setItem('user', JSON.stringify(action.payload.user)); // Save to local storage
            localStorage.setItem('useId', action.payload.useId); // Changed 'userId' to 'useId'
        });
    },
});

export const { signOut, updateUser , loadUser } = userSlice.actions;
export default userSlice.reducer;