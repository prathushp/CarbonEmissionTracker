/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/
import {LanguageContext} from "../contexts/LanguageContext.tsx";
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button, Container, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
        color: '#FFFFFF',
        padding: '10px',
        marginTop: 'auto', // Push the footer to the bottom of the page
        width: '100%', // Set width to 100% to cover the entire viewport width
        display: 'flex',
        justifyContent: 'center', // Align items to the center
        flexDirection: 'column',
    },
    headerLinks: {
        textAlign: 'center', // Center align the links
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: theme.spacing(0),
        textAlign: 'right', // Align "Stay informed" to the right
    },
    button: {
        marginTop: theme.spacing(2), // Add top margin to the button
        backgroundColor: 'blue', // Set button background color to blue
        color: 'white', // Set button text color to white
        float: 'right', // Align the button to the right
    },
    iconButton: {
        color: '#FFFFFF',
    },
    copyright: {
        display: 'flex',
        justifyContent: 'center', // Align the copyright text to the center
    },
    subscribeContainer: {
        textAlign: 'right', // Align the content of the container to the right
        alignItems: 'flex-end', // Align items to the bottom
    },
}));

const translations = {
    en: {
        home: 'Home',
        aboutUs: 'About Us',
        events: 'Events',
        news: 'News',
        contactUs: 'Contact Us',
        subscribeTitle: 'Stay informed! Subscribe to our newsletter',
        subscribeButton: 'Subscribe',
        copyright: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    },
    de: {
        home: 'Startseite',
        aboutUs: 'Über uns',
        events: 'Veranstaltungen',
        news: 'Nachrichten',
        contactUs: 'Kontaktiere uns',
        subscribeTitle: 'Bleiben Sie informiert! Abonnieren Sie unseren Newsletter',
        subscribeButton: 'Abonnieren',
        copyright: `© ${new Date().getFullYear()} Ihr Unternehmen. Alle Rechte vorbehalten.`,
    },
    fr: {
        home: 'Accueil',
        aboutUs: 'À propos de nous',
        events: 'Événements',
        news: 'Actualités',
        contactUs: 'Contactez-nous',
        subscribeTitle: 'Restez informé ! Abonnez-vous à notre newsletter',
        subscribeButton: 'Souscrire',
        copyright: `© ${new Date().getFullYear()} Votre entreprise. Tous droits réservés.`,
    },
    es: {
        home: 'Inicio',
        aboutUs: 'Sobre nosotros',
        events: 'Eventos',
        news: 'Noticias',
        contactUs: 'Contáctenos',
        subscribeTitle: '¡Mantente informado! Suscríbete a nuestro boletín informativo',
        subscribeButton: 'Suscribirse',
        copyright: `© ${new Date().getFullYear()} Tu empresa. Todos los derechos reservados.`,
    },
    it: {
        home: 'Pagina iniziale',
        aboutUs: 'Chi siamo',
        events: 'Eventi',
        news: 'Notizie',
        contactUs: 'Contattaci',
        subscribeTitle: 'Resta informato! Iscriviti alla nostra newsletter',
        subscribeButton: 'Iscriviti',
        copyright: `© ${new Date().getFullYear()} La tua azienda. Tutti i diritti riservati.`,
    },
};

function Footer() {
    const classes = useStyles();
    const { selectedLanguage, setSelectedLanguage } = React.useContext(LanguageContext);

    return (
        <Box component="footer" className={classes.root}>
            <Box className={classes.headerLinks}>
                <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                    <Link href="/" style={{ color: '#fff', marginRight: '20px' }}>{translations[selectedLanguage].home}</Link>
                    <Link href="/aboutus" style={{ color: '#fff', marginRight: '20px' }}>{translations[selectedLanguage].aboutUs}</Link>
                    <Link href="/eventlist" style={{ color: '#fff', marginRight: '20px' }}>{translations[selectedLanguage].events}</Link>
                    <Link href="/news" style={{ color: '#fff', marginRight: '20px' }}>{translations[selectedLanguage].news}</Link>
                    <Link href="/contactus" style={{ color: '#fff', marginRight: '20px' }}>{translations[selectedLanguage].contactUs}</Link>
                </Typography>
            </Box>
            <Container className={classes.subscribeContainer}>
                <Typography className={classes.title}>{translations[selectedLanguage].subscribeTitle}</Typography>
                <IconButton component={RouterLink} to="/subscribe" className={classes.button}>
                    {translations[selectedLanguage].subscribeButton}
                </IconButton>
            </Container>
            <Typography variant="body2" className={classes.copyright}>
                {translations[selectedLanguage].copyright}
            </Typography>
            <Box>
                {Object.keys(translations).map((lang) => (
                    <Button key={lang} onClick={() => setSelectedLanguage(lang)}>{lang}</Button>
                ))}
            </Box>
        </Box>
    );
}

export default Footer;