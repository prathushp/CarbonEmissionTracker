// pages/UI_AppBar.tsx
/************
 * This code segment is the UI application bar that contains a drop down menu that leads other pages, and a signout button that will take the
 * user back to the sign in page once clicked on
 * author: Zehao Song
 ************/
import React, { MouseEvent, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useNavigate} from 'react-router-dom';
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import {useUser} from "../contexts/UserContext.tsx";
import {makeStyles} from "@material-ui/core/styles";
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles(() => ({
    logoutbutton: {
        marginLeft:'auto',
    },
}));

const UI_AppBar: React.FC = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const { signOut } = useUser();

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static" style={{backgroundColor:'#48b30b'}}>
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                    <IconButton color="inherit" aria-label="home" component={Link} to="/">
                        <HomeIcon />
                    </IconButton>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Carbon Tracker
                        </Typography>
                    </div>
                    <Button component={Link} to="/login" variant="text" color="inherit" onClick={signOut} startIcon={<LogoutIcon/>} className={classes.logoutbutton}>
                        Sign Out
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                    >
                        <MenuItem onClick={() => navigate('/user-interface')}>Edit Information</MenuItem>
                        <MenuItem onClick={() => navigate('/eventlist')}>Find Events</MenuItem>
                        <MenuItem onClick={() => navigate('/submitdata')}>Submit Data</MenuItem>
                        <MenuItem onClick={() => navigate('/viewdata')}>Visualize Data</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default UI_AppBar;