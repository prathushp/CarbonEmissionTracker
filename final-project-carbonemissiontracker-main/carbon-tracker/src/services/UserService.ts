// services/UserService.ts

/************
 * This code segment was depreciated after the addition of UserContext files
 * author: Zehao Song
 ************/

import axios from 'axios';
//import { User } from '../models/User';

// Signin functions for user signin
async function signIn(username: string, password: string) {
    try {
        // when called, try using axios to send a post request to end points below with a body containing signin info
        const response = await axios.post('/api/auth/signin', {
            username,
            password,
        });
        // the token returned if one, will be saved to the localStorage, this help with saving data across sessions
        if (response.data.token) {
            localStorage.setItem('userInfo', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// If signout occurs, the localStorage will remove the userInfo thus unauthenticate the user
async function signOut() {
    localStorage.removeItem('userInfo');
}

export const UserService = {
    signIn,
    signOut,
};