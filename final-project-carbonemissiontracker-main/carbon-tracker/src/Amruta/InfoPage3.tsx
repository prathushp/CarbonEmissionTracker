/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/

import { useState, useEffect, useContext } from 'react';
import { Typography, Container, makeStyles } from '@material-ui/core';
import PlaceholderImage from '../Images/image3.jpg';
import {LanguageContext} from "../contexts/LanguageContext.tsx";

const translations = {
    en: {
        'Why Carbon Emissions Matter': 'Why Carbon Emissions Matter',
        'Climate change poses significant challenges to our planet, including rising temperatures, extreme weather events, sea level rise, and disruptions to ecosystems and biodiversity. Addressing carbon emissions is crucial to mitigating these impacts and preserving a habitable environment for future generations.':
            'Climate change poses significant challenges to our planet, including rising temperatures, extreme weather events, sea level rise, and disruptions to ecosystems and biodiversity. Addressing carbon emissions is crucial to mitigating these impacts and preserving a habitable environment for future generations.'
    },
    de: {
        'Why Carbon Emissions Matter': 'Warum Kohlenstoffemissionen wichtig sind',
        'Climate change poses significant challenges to our planet, including rising temperatures, extreme weather events, sea level rise, and disruptions to ecosystems and biodiversity. Addressing carbon emissions is crucial to mitigating these impacts and preserving a habitable environment for future generations.':
            'Der Klimawandel stellt bedeutende Herausforderungen für unseren Planeten dar, darunter steigende Temperaturen, extreme Wetterereignisse, den Anstieg des Meeresspiegels und Störungen der Ökosysteme und der Biodiversität. Die Bekämpfung von Kohlenstoffemissionen ist entscheidend, um diese Auswirkungen zu mildern und eine lebenswerte Umwelt für zukünftige Generationen zu erhalten.'
    },
    fr: {
        'Why Carbon Emissions Matter': 'Pourquoi les émissions de carbone sont importantes',
        'Climate change poses significant challenges to our planet, including rising temperatures, extreme weather events, sea level rise, and disruptions to ecosystems and biodiversity. Addressing carbon emissions is crucial to mitigating these impacts and preserving a habitable environment for future generations.':
            'Le changement climatique pose d\'importants défis à notre planète, notamment l\'augmentation des températures, les événements météorologiques extrêmes, la montée du niveau de la mer et les perturbations des écosystèmes et de la biodiversité. La lutte contre les émissions de carbone est cruciale pour atténuer ces impacts et préserver un environnement habitable pour les générations futures.'
    },
    es: {
        'Why Carbon Emissions Matter': 'Por qué importan las emisiones de carbono',
        'Climate change poses significant challenges to our planet, including rising temperatures, extreme weather events, sea level rise, and disruptions to ecosystems and biodiversity. Addressing carbon emissions is crucial to mitigating these impacts and preserving a habitable environment for future generations.':
            'El cambio climático plantea desafíos significativos para nuestro planeta, incluido el aumento de las temperaturas, eventos climáticos extremos, el aumento del nivel del mar y las alteraciones de los ecosistemas y la biodiversidad. Abordar las emisiones de carbono es crucial para mitigar estos impactos y preservar un medio ambiente habitable para las futuras generaciones.'
    },
    it: {
        'Why Carbon Emissions Matter': 'Perché le emissioni di carbonio sono importanti',
        'Climate change poses significant challenges to our planet, including rising temperatures, extreme weather events, sea level rise, and disruptions to ecosystems and biodiversity. Addressing carbon emissions is crucial to mitigating these impacts and preserving a habitable environment for future generations.':
            'Il cambiamento climatico pone sfide significative al nostro pianeta, tra cui l\'aumento delle temperature, eventi meteorologici estremi, l\'innalzamento del livello del mare e le perturbazioni degli ecosistemi e della biodiversità. Affrontare le emissioni di carbonio è cruciale per mitigare questi impatti e preservare un ambiente abitabile per le future generazioni.'
    },
};

const useStyles = makeStyles((theme) => ({
    section: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: 0, // Set initial opacity to 0
        transform: 'translateX(-50%)', // Set initial translateX value to push content to the left
        transition: 'opacity 0.5s ease, transform 0.5s ease', // Apply transition
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
        maxWidth: '100%',
        margin: theme.spacing(1), // Add margin to the image container
        padding: theme.spacing(1), // Add padding to the image container
    },
    image: {
        maxWidth: '100%',
        height: '300px',
        width: '1000px',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
        transition: 'transform 0.5s ease', // Apply transition
    },
}));

function Infopage2() {
    const classes = useStyles();
    const { selectedLanguage } = useContext(LanguageContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(`.${classes.section}`);
            if (section) {
                const topOffset = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(topOffset < windowHeight * 0.8);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [classes.section]);

    useEffect(() => {
        if (isVisible) {
            const sections = Array.from(document.querySelectorAll(`.${classes.section}`));
            sections.forEach((section) => {
                (section as HTMLElement).style.opacity = '1';
                (section as HTMLElement).style.transform = 'translateX(0)';
            });
        }
    }, [isVisible, classes.section]);

    return (
        <Container>
            <section className={classes.section}>
                <Typography variant="h3" className={classes.title}>
                    {translations[selectedLanguage]['Why Carbon Emissions Matter']}
                </Typography>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        <Typography variant="body1">
                            {translations[selectedLanguage]['Climate change poses significant challenges to our planet, including rising temperatures, extreme weather events, sea level rise, and disruptions to ecosystems and biodiversity. Addressing carbon emissions is crucial to mitigating these impacts and preserving a habitable environment for future generations.']}
                        </Typography>
                    </div>
                    <div className={classes.imageContainer}>
                        <img src={PlaceholderImage} alt="Understanding Carbon Emissions" className={classes.image}/>
                    </div>
                </div>
            </section>
            {/* Repeat the same pattern for other sections */}
        </Container>
    );
}

export default Infopage2;