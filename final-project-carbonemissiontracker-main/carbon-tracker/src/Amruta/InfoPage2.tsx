/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/
import { useEffect, useRef, useState, useContext } from 'react';
import { Typography, Container, makeStyles } from '@material-ui/core';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring
import PlaceholderImage from '../Images/image2.jpeg';
import {LanguageContext} from "../contexts/LanguageContext.tsx";


const translations = {
    en: {
        title: 'Tracking Your Carbon Footprint',
        content: `Measuring your carbon footprint is the first step towards reducing your impact on the environment. Use our carbon footprint calculator to estimate your emissions from activities like energy usage, transportation, diet, and waste generation. By understanding your carbon footprint, you can identify areas where you can make changes to reduce emissions.`,
    },
    de: {
        title: 'Verfolgung Ihres CO2-Fußabdrucks',
        content: `Die Messung Ihres CO2-Fußabdrucks ist der erste Schritt zur Verringerung Ihrer Auswirkungen auf die Umwelt. Verwenden Sie unseren CO2-Fußabdruckrechner, um Ihre Emissionen aus Aktivitäten wie Energieverbrauch, Transport, Ernährung und Abfallerzeugung zu schätzen. Durch das Verständnis Ihres CO2-Fußabdrucks können Sie Bereiche identifizieren, in denen Sie Änderungen vornehmen können, um die Emissionen zu reduzieren.`,
    },
    fr: {
        title: 'Suivi de votre empreinte carbone',
        content: `Mesurer votre empreinte carbone est la première étape pour réduire votre impact sur l'environnement. Utilisez notre calculatrice d'empreinte carbone pour estimer vos émissions provenant d'activités telles que la consommation d'énergie, le transport, l'alimentation et la production de déchets. En comprenant votre empreinte carbone, vous pouvez identifier les domaines où vous pouvez apporter des changements pour réduire les émissions.`,
    },
    es: {
        title: 'Seguimiento de tu huella de carbono',
        content: `Medir tu huella de carbono es el primer paso para reducir tu impacto en el medio ambiente. Utiliza nuestra calculadora de huella de carbono para estimar tus emisiones de actividades como el consumo de energía, el transporte, la dieta y la generación de residuos. Al comprender tu huella de carbono, puedes identificar áreas donde puedes realizar cambios para reducir las emisiones.`,
    },
    it: {
        title: 'Tracciamento della tua impronta di carbonio',
        content: `Misurare la tua impronta di carbonio è il primo passo per ridurre il tuo impatto sull'ambiente. Utilizza il nostro calcolatore di impronta di carbonio per stimare le tue emissioni da attività come il consumo di energia, il trasporto, la dieta e la generazione di rifiuti. Comprendendo la tua impronta di carbonio, puoi individuare aree in cui puoi apportare modifiche per ridurre le emissioni.`,
    },
};
// Add translations for other languages


const useStyles = makeStyles((theme) => ({
    section: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: 0, // Initially hide the section
    },
    title: {
        marginBottom: theme.spacing(2),
        textAlign: 'center',
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
        textAlign: 'justify',
        margin: theme.spacing(2), // Add margin to the text container
    },
    imageContainer: {
        maxWidth: '1000px',
        margin: theme.spacing(1), // Add margin to the image container
        padding: theme.spacing(1), // Add padding to the image container
        transition: 'transform 0.3s ease', // Add transition for smooth scaling
        '&:hover img': {
            transform: 'scale(1.1)', // Zoom effect on hover
        },
    },
    image: {
        maxWidth: '1000px',
        height: '300px',
        width: '500px',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
    },
}));

function Infopage1() {
    const classes = useStyles();
    const { selectedLanguage } = useContext(LanguageContext);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Define animation properties using useSpring
    const slideIn = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0%)' : 'translateX(50%)', // Slide in from right to left
        from: { opacity: 0, transform: 'translateX(50%)' }, // Initial opacity is 0 and transform is set to translate 50%
    });

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const topOffset = sectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (topOffset < windowHeight * 0.8) {
                    setIsVisible(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container>
            <animated.section ref={sectionRef} className={classes.section} style={slideIn}>
                <Typography variant="h3" className={classes.title}>
                    {translations[selectedLanguage].title}
                </Typography>
                <div className={classes.contentContainer}>
                    <div className={classes.imageContainer}>
                        <img src={PlaceholderImage} alt="Understanding Carbon Emissions" className={classes.image} />
                    </div>
                    <div className={classes.content}>
                        <Typography variant="body1">
                            {translations[selectedLanguage].content}
                        </Typography>
                    </div>
                </div>
            </animated.section>
        </Container>
    );
}

export default Infopage1;