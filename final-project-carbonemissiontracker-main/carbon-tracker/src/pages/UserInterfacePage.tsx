// pages/UserInterfacePage.tsx
/************
 * This code segment is the main UI, when the user log in, they will be greeted with this page, it displays most of their information
 * and allows them to change their info and details easily
 * author: Zehao Song
 ************/

import React, {useState, useCallback} from "react";
import { useUser } from '../contexts/UserContext';
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';
import {Box, Button, TextField, Paper, Card, CardActionArea, CardMedia, CardContent} from '@mui/material';
import bargraph from '../assets/img1.png';
import {Typography} from "@material-ui/core";
import submitimg from '../assets/Submit.jpg';
import uploadimg from '../assets/uploadimg.jpg'
import banner from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';

// UserProfile component
const UserInterfacePage: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const { user, updateUser } = useUser();  // retrieve updateUser function from context

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    // User Hooks for editing the user information
    const [username, setUsername] = useState(user ? user.username : '');
    const [oldUsername] = useState(user ? user.username : '');
    const [firstname, setFirstname] = useState(user ? user.firstname : '');
    const [lastname, setLastname] = useState(user ? user.lastname : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [address, setAddress] = useState(user ? user.address : '');
    const navigate = useNavigate();

    // Wrap in useCallback to avoid unnecessary renders
    const updateUserDetailsOnServer = useCallback(async () => {
        try {
            // Update user on server
            await axios.put('http://localhost:3000/users/user-interface', {
                username,
                oldUsername,
                firstname,
                lastname,
                email,
                address,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(username);
            // Update user in context
            updateUser({
                username,
                firstname,
                lastname,
                email,
                address,
            });

            setEditing(false);
        } catch (err) {
            console.log(err);
        }
    }, [username, firstname, lastname, email, address]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Update user on server and in context
        updateUserDetailsOnServer();
    };

    const handleCancel = () => {
        setUsername(user ? user.username : '');
        setFirstname(user ? user.firstname : '');
        setLastname(user ? user.lastname : '');
        setEmail(user ? user.email : '');
        setAddress(user ? user.address : '');
        setEditing(false);
    }

    return (
        <div style={{ background: 'linear-gradient(to bottom, #abb6ba, #068a32)', backgroundSize: 'cover', minHeight: '100vh'}}>
            <br />
            {!editing && <Button variant="contained" color="primary" onClick={() => setEditing(true)}>Edit</Button>}
            {
                editing ?
                    (<form onSubmit={handleSubmit}>
                            <Box marginBottom={3}>
                                <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} fullWidth />
                            </Box>
                            <Box marginBottom={3}>
                                <TextField label="First Name" value={firstname} onChange={e => setFirstname(e.target.value)} fullWidth />
                            </Box>
                            <Box marginBottom={3}>
                                <TextField label="Last Name" value={lastname} onChange={e => setLastname(e.target.value)} fullWidth />
                            </Box>
                            <Box marginBottom={3}>
                                <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} fullWidth />
                            </Box>
                            <Box marginBottom={3}>
                                <TextField label="Address" value={address} onChange={e => setAddress(e.target.value)} fullWidth />
                            </Box>
                            <Box display="flex" justifyContent="space-between" marginTop={3}>
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                                <Button variant="outlined" color="secondary" onClick={handleCancel}>Cancel</Button>
                            </Box>
                    </form>)
                    :
                    (<Paper elevation={3} style={{padding: '20px', marginTop: '10px', background: 'linear-gradient(to bottom, #36c4f7, #1590bd)'}}>
                        <p>Username: {username}</p>
                        <p>First name: {firstname}</p>
                        <p>Last name: {lastname}</p>
                        <p>Email: {email}</p>
                        <p>Address: {address}</p>
                    </Paper>)
            }
            <br/>
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                <Box
                    style={{
                        position: 'relative',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginRight: '-45px',
                        border: '4px solid #6ab04c',
                        zIndex: '1',
                    }}
                >
                    <img src={banner} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                {/* Text box */}
                <Box
                    flex="1"
                    style={{
                        backgroundColor: 'green',
                        padding: '50px',
                        position: 'relative',
                        zIndex: '0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundImage: `url(${banner2})`,
                        backgroundSize: '30%',
                        backgroundPosition: 'center ',
                    }}
                >
                    <Typography variant="h4" style={{ color: '#0a6e0a' }}>
                        Let's Work Towards a Greener Future!
                    </Typography>
                </Box>
            </Box>
            <br/>
            <Box style={{ display: 'flex', justifyContent: 'space-between', margin: '0 auto', width: '90%' }}>
                <Card style={{ width: '30%' }}>
                    <CardActionArea onClick={() => navigate('/viewdata')}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={bargraph}
                                alt="View Your Progress!"
                                style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </Box>
                    </CardActionArea>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                style={{
                                    fontWeight: 'bold',  // move fontWeight here
                                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    borderRadius: '5px'
                                }}>
                                Let's see how you are doing!
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

                <Card style={{ width: '30%' }}>
                    <CardActionArea onClick={() => navigate('/submitdata')}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={submitimg}
                                alt="Submit your data today"
                                style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </Box>
                    </CardActionArea>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                style={{
                                    fontWeight: 'bold',  // move fontWeight here
                                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    borderRadius: '5px'
                                }}>
                                Start Tracking your Carbon Emission Today!
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

                <Card style={{ width: '30%' }}>
                    <CardActionArea onClick={() => navigate('/eventlist')}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={uploadimg}
                            alt="Submit your data today"
                            style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </CardActionArea>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                style={{
                                    fontWeight: 'bold',  // move fontWeight here
                                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    borderRadius: '5px'
                                }}>
                                Start Signing up for Events today
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Box>
        </div>
    );
}

export default UserInterfacePage;