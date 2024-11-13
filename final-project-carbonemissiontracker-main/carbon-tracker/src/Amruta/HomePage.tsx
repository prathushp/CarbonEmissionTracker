/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {LanguageContext} from "../contexts/LanguageContext.tsx";
import backImg from '../Images/Background.webp';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${backImg})`, // Use backImg here
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        margin: 0,
        padding: 'unset',
        height: '100vh',
        width: '100%',
        paddingTop: '100px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    contentContainer: {
        position: 'absolute',
        top: '50%',        // Aligning vertically center instead of 40%
        left: '70%',   // Change this to adjust horizontal position
        transform: 'translate(-70%, -50%)',   // Also update this
        textAlign: 'center',  // Aligning text center instead of right
        color: '#FFFFFF',
        fontSize: '2em',
    },
}));

interface LanguageStrings {
    [key: string]: {
        heading: string;
        subheading: string;
    };
}

const languageStrings: LanguageStrings = {
    en: {
        heading: 'CARBON ACCOUNTING',
        subheading: 'Measure Your Carbon Footprint & Create Your Sustainability Roadmap',
    },
    de: {
        heading: 'KOHLENSTOFFABRECHNUNG',
        subheading: 'Messen Sie Ihren CO2-Fußabdruck und erstellen Sie Ihre Nachhaltigkeits-Roadmap',
    },
    fr: {
        heading: 'COMPTABILITÉ CARBONE',
        subheading: 'Mesurez votre empreinte carbone et créez votre feuille de route en matière de durabilité',
    },
    es: {
        heading: 'CONTABILIDAD DE CARBONO',
        subheading: 'Mida su huella de carbono y cree su hoja de ruta de sostenibilidad',
    },
    it: {
        heading: 'CONTABILITÀ DEL CARBONIO',
        subheading: 'Misura la tua impronta di carbonio e crea la tua tabella di marcia per la sostenibilità',
    },
};


const HomePage: React.FC = () =>  {
    const classes = useStyles();
    const { selectedLanguage } = React.useContext(LanguageContext);

    // Check if the selected language exists in languageStrings
    const languageData = languageStrings[selectedLanguage];
    if (!languageData) {
        // Handle the case where the selected language is not found
        return <div className={classes.root}>Language Not Found</div>;
    }
    // Destructure heading and subheading from languageData
    const { heading, subheading } = languageData;
    console.log(selectedLanguage);
    console.log('languageData:', languageData);
    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <h1>{heading}</h1>
                <h4><p>{subheading}</p></h4>
            </div>
        </div>
    );
}

export default HomePage;