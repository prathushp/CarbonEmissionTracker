// components/LoginForm.tsx
/************
 * A customized loging form that includes styling
 * author: Zehao Song
 ************/
import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import user_icon from '../assets/person.png';
import password_icon from '../assets/password.png';

export const LoginForm: React.FC = () => {
    const { signIn } = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await signIn({username, password});
            setMessage("");
            navigate('/user-interface', {replace: true});
        } catch (error) {
            let errorMessage = 'Unexpected error';
            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === 'string') {
                errorMessage = error;
            }
            console.error("An error occurred during login", error);
            setMessage(`An error occurred: ${errorMessage}`);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input
                            type="text"
                            placeholder="UserName"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {message && <p>{message}</p>}
                <div className="submit-container">
                    <button className="submit" type="submit">Log In</button>
                </div>
            </form>
        </>
    );
}