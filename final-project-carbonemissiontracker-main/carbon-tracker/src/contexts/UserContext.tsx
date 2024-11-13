// contexts/UserContext.tsx
/************
 * This code was modified to acommondate the new implemented Redux, it used to work using regular signin method implemented,
 * the older version of this code can be found in the depreciatedCode folder
 * author: Zehao Song
 ************/
import React, { createContext, useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from '../Redux/Store.ts';
import { signIn as signInAction, signOut as signOutAction, updateUser as updateUserAction} from '../Redux/UserRedux.tsx';
import { User } from '../models/User';

interface UserContextProps {
    user: User | null;
    userId: string | null;
    signIn: (arg: {username: string, password: string}) => Promise<void>;
    signOut: () => void;
    updateUser: (updatedDetails: Partial<User>) => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);


interface UserProviderProps {
    children: React.ReactNode;
}
const UserProvider = ({children}: UserProviderProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { userId, user } = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    const signIn = useCallback(async (arg: {username: string, password: string}) => {
        try {
            await dispatch(signInAction(arg)).unwrap();
            console.log(userId);
            // Handle successful sign-in. The `user` variable should be an object contains `user` and `userId`.
        } catch (err) {
            // Handle sign-in failure
            console.error('Failed to sign in: ', err);
        }
    }, [dispatch]);

    const signOut = useCallback(() => {
        dispatch(signOutAction());
        navigate('/login', { replace: true });
    }, [dispatch, navigate]);

    const updateUser = useCallback((updatedDetails: Partial<User>) => {
        dispatch(updateUserAction(updatedDetails));
    }, [dispatch]);

    return (
        <UserContext.Provider value={{ user, userId, signIn, signOut, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};