/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language'; // Import Language Icon
import Logo from '../Images/Logo.png';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box"; // Import useNavigate
import {LanguageContext} from "../contexts/LanguageContext.tsx";

interface Page {
    label: string;
    route?: string;
    dropdownItems?: string[];
}

const pages: Page[] = [
    {label:'User Profile', route:'/user-interface'},
    { label: 'Home', route: '/', dropdownItems: [] },
    { label: 'About us', route: '/aboutus'},
    { label: 'Events', route: '/eventlist'},
    // { label: 'For Individuals', dropdownItems: ['Calculate'] },
    { label: 'News', route:'/news'},
    { label: 'SIgn In', route: '/login' },
];

// Define language options
const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'German', value: 'de' },
    { label: 'French', value: 'fr' },
    { label: 'Spanish', value: 'es' },
    { label: 'Italian', value: 'it' },
];

interface Translations {
    [lang: string]: { [key: string]: string };
}

// Translation mappings
const translations: Translations= {
    en: {
        'Home': 'Home',
        'Events': 'Events',
        'For Individuals': 'For Individuals',
        'News': 'News',
        'Insights': 'Insights',
        'Signup': 'Signup',
        'Carbon trace': 'Carbon trace',
    },
    de: {
        'Home': 'Startseite',
        'Events': 'Veranstaltungen',
        'For Individuals': 'Für Einzelpersonen',
        'News': 'Nachrichten',
        'Insights': 'Erkenntnisse',
        'Signup': 'Registrieren',
        'Carbon trace': 'Kohlenstoffspur',
    },
    fr: {
        'Home': 'Accueil',
        'Events': 'Événements',
        'For Individuals': 'Pour les particuliers',
        'News': 'Nouvelles',
        'Insights': 'Aperçus',
        'Signup': 'S\'inscrire',
        'Carbon trace': 'Trace de carbone',
    },
    es: {
        'Home': 'Inicio',
        'Events': 'Eventos',
        'For Individuals': 'Para Individuos',
        'News': 'Noticias',
        'Insights': 'Perspectivas',
        'Signup': 'Registrarse',
        'Carbon trace': 'Huella de carbono',
    },
    it: {
        'Home': 'Home',
        'Events': 'Eventi',
        'For Individuals': 'Per Individui',
        'News': 'Notizie',
        'Insights': 'Approfondimenti',
        'Signup': 'Iscriviti',
        'Carbon trace': 'Traccia di carbonio',
    },
};

const MainMenuDropDown: React.FC = () =>  {
    const { selectedLanguage, setSelectedLanguage } = React.useContext(LanguageContext);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate(); // Initialize navigate

    const handleLanguageClick: React.MouseEventHandler<SVGSVGElement> = (event) => {
        // Explicitly cast event.target to HTMLElement
        const target = event.target as HTMLElement;
        setLanguageAnchorEl(target);
    };

    const handleLanguageClose = () => {
        setLanguageAnchorEl(null);
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (item: string) => {
        navigate(`/${item.toLowerCase()}`);
        handleClose();
    };

    const handleClose = () => {
        setAnchorEl(null);
        setLanguageAnchorEl(null);
    };

    const translate = (key: string) => {
        return translations[selectedLanguage][key] || key;
    };

    return (
        <AppBar sx={{ flexGrow: 1, width: '100%', left: 0, right: 0, backgroundColor: '#48b30b' }}>
            <Toolbar sx={{ width: '100%' }}>
                <div style={{ alignItems: 'center', flexGrow: 1 }}>
                    <Typography variant="h6" noWrap sx={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
                        <img src={Logo} alt="Logo" style={{ width: '50px', height: '58px', transform: 'rotate(90deg)' }} />
                        {translate('Carbon tracker')}
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>

                    {pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.route ? (
                                <Box mr={2}>
                                    <a href={page.route} style={{ textDecoration: 'none', color: 'white' }}>
                                        <Typography variant="h6">{translate(page.label)}</Typography>
                                    </a>
                                </Box>
                            ) : (
                                <Box mr={2}>
                                    <Typography variant="h6" onClick={(event) => handleMenuClick(event)} style={{ cursor: 'pointer', color: 'white' }}>
                                        {translate(page.label)}
                                        <ArrowDropDownIcon />
                                    </Typography>
                                    <Menu
                                        id={`menu-${index}`}
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        {page.dropdownItems && page.dropdownItems.map((item, idx) => (
                                            <MenuItem key={idx} onClick={() => handleMenuItemClick(item)}>{translate(item)}</MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            )}
                        </React.Fragment>
                    ))}
                    <LanguageIcon onClick={handleLanguageClick} style={{ cursor: 'pointer', color: 'white', marginRight: '40px' }} />
                    <Menu
                        id="language-menu"
                        anchorEl={languageAnchorEl}
                        open={Boolean(languageAnchorEl)}
                        onClose={handleLanguageClose}
                    >
                        {languageOptions.map((language, index) => (
                            <MenuItem
                                key={index}
                                onClick={() => {
                                    setSelectedLanguage(language.value);
                                    handleLanguageClose();
                                }}
                            >
                                {language.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default MainMenuDropDown;