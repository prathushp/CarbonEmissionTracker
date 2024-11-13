/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/
import {useContext} from "react";
import { Typography, Container, makeStyles } from '@material-ui/core';
import {LanguageContext} from "../contexts/LanguageContext.tsx";

const translations = {
    en: {
        title: 'Take Action Today',
        content: 'Join us in the fight against climate change by taking action to reduce your carbon footprint. Together, we can make a difference and create a more sustainable future for our planet.'
    },
    de: {
        title: 'Handeln Sie heute',
        content: 'Schließen Sie sich uns im Kampf gegen den Klimawandel an, indem Sie Maßnahmen ergreifen, um Ihren CO2-Fußabdruck zu reduzieren. Gemeinsam können wir einen Unterschied machen und eine nachhaltigere Zukunft für unseren Planeten schaffen.'
    },
    fr: {
        title: 'Agissez dès aujourd\'hui',
        content: 'Rejoignez-nous dans la lutte contre le changement climatique en agissant pour réduire votre empreinte carbone. Ensemble, nous pouvons faire la différence et créer un avenir plus durable pour notre planète.'
    },
    es: {
        title: 'Actúa hoy',
        content: 'Únete a nosotros en la lucha contra el cambio climático tomando medidas para reducir tu huella de carbono. Juntos, podemos marcar la diferencia y crear un futuro más sostenible para nuestro planeta.'
    },
    it: {
        title: 'Agisci oggi',
        content: 'Unisciti a noi nella lotta contro il cambiamento climatico agendo per ridurre la tua impronta di carbonio. Insieme possiamo fare la differenza e creare un futuro più sostenibile per il nostro pianeta.'
    },
};


const useStyles = makeStyles((theme) => ({
    section: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center', // Center the content typography
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2), // Add padding to the content container
    },
    content: {
        maxWidth: '100%',
        //textAlign: 'justify',
        margin: theme.spacing(2), // Add margin to the text container
    },
}));

function Infopage4() {
    const classes = useStyles();
    const { selectedLanguage } = useContext(LanguageContext);
    const translatedTitle = translations[selectedLanguage].title;
    const translatedContent = translations[selectedLanguage].content;

    return (
        <Container>
            <section className={classes.section}>
                <Typography variant="h4" className={classes.title}>
                    {translatedTitle}
                </Typography>
                <Typography variant="body1" className={classes.content}>
                    {translatedContent}
                </Typography>
            </section>
            {/* Repeat the same pattern for other sections */}
        </Container>
    );
}

export default Infopage4;