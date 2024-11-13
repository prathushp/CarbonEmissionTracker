/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/

import { useState, useEffect, useContext } from 'react';
import { Typography, Container, List, ListItem, makeStyles } from '@material-ui/core';
import PlaceholderImage from '../Images/ending.webp';
import {LanguageContext} from "../contexts/LanguageContext.tsx";

const translations = {
    en: {
        title: 'Reducing Your Carbon Footprint',
        listItem1: 'Energy Efficiency: Use energy-efficient appliances, turn off lights and electronics when not in use, and insulate your home to reduce heating and cooling needs.',
        listItem2: 'Transportation: Choose eco-friendly modes of transportation such as walking, cycling, carpooling, or using public transit. Consider switching to electric or hybrid vehicles.',
        listItem3: 'Sustainable Living: Adopt a plant-based diet, reduce meat consumption, buy local and organic foods, and minimize food waste through meal planning and composting.',
        listItem4: 'Waste Reduction: Recycle, reuse, and repurpose materials whenever possible. Avoid single-use plastics and opt for reusable alternatives.',
        listItem5: 'Renewable Energy: Support renewable energy sources such as solar, wind, and hydroelectric power. Consider installing solar panels or purchasing green energy from your utility provider.'
    },
    de: {
        title: 'Verringerung Ihres Kohlenstoff-Fußabdrucks',
        listItem1: 'Energieeffizienz: Verwenden Sie energieeffiziente Geräte, schalten Sie Lichter und Elektronik aus, wenn sie nicht in Gebrauch sind, und isolieren Sie Ihr Zuhause, um den Heiz- und Kühlbedarf zu reduzieren.',
        listItem2: 'Transport: Wählen Sie umweltfreundliche Verkehrsmittel wie Gehen, Radfahren, Fahrgemeinschaften oder den öffentlichen Nahverkehr. Erwägen Sie den Umstieg auf Elektro- oder Hybridfahrzeuge.',
        listItem3: 'Nachhaltiges Leben: Übernehmen Sie eine pflanzliche Ernährung, reduzieren Sie den Fleischkonsum, kaufen Sie lokale und biologische Lebensmittel und minimieren Sie Lebensmittelabfälle durch Mahlzeitenplanung und Kompostierung.',
        listItem4: 'Abfallreduzierung: Recyceln, wiederverwenden und verwerten Sie Materialien, wann immer möglich. Vermeiden Sie Einwegplastik und greifen Sie auf wiederverwendbare Alternativen zurück.',
        listItem5: 'Erneuerbare Energien: Unterstützen Sie erneuerbare Energiequellen wie Sonnen-, Wind- und Wasserkraft. Erwägen Sie die Installation von Solaranlagen oder den Kauf von grüner Energie von Ihrem Energieversorger.'
    },
    fr: {
        title: 'Réduction de votre empreinte carbone',
        listItem1: 'Efficacité énergétique : Utilisez des appareils économes en énergie, éteignez les lumières et les appareils électroniques lorsqu\'ils ne sont pas utilisés, et isolez votre maison pour réduire les besoins en chauffage et en climatisation.',
        listItem2: 'Transport : Choisissez des modes de transport écologiques tels que la marche, le vélo, le covoiturage ou les transports en commun. Envisagez de passer à des véhicules électriques ou hybrides.',
        listItem3: 'Vie durable : Adoptez un régime alimentaire à base de plantes, réduisez la consommation de viande, achetez des aliments locaux et biologiques, et minimisez le gaspillage alimentaire grâce à la planification des repas et au compostage.',
        listItem4: 'Réduction des déchets : Recyclez, réutilisez et valorisez les matériaux chaque fois que possible. Évitez les plastiques à usage unique et optez pour des alternatives réutilisables.',
        listItem5: 'Énergies renouvelables : Soutenez les sources d\'énergie renouvelables telles que le solaire, l\'éolien et l\'hydroélectricité. Envisagez d\'installer des panneaux solaires ou d\'acheter de l\'énergie verte auprès de votre fournisseur d\'énergie.'
    },
    es: {
        title: 'Reduciendo su huella de carbono',
        listItem1: 'Eficiencia energética: Utilice electrodomésticos eficientes, apague las luces y los dispositivos electrónicos cuando no estén en uso, e aísle su hogar para reducir las necesidades de calefacción y refrigeración.',
        listItem2: 'Transporte: Elija modos de transporte ecológicos como caminar, andar en bicicleta, compartir el coche o usar el transporte público. Considere cambiar a vehículos eléctricos o híbridos.',
        listItem3: 'Vida sostenible: Adopte una dieta basada en plantas, reduzca el consumo de carne, compre alimentos locales y orgánicos, y minimice el desperdicio de alimentos mediante la planificación de comidas y el compostaje.',
        listItem4: 'Reducción de residuos: Recicle, reutilice y reutilice materiales siempre que sea posible. Evite los plásticos de un solo uso y opte por alternativas reutilizables.',
        listItem5: 'Energía renovable: Apoye fuentes de energía renovable como la solar, eólica e hidroeléctrica. Considere instalar paneles solares o comprar energía verde a su proveedor de servicios públicos.'
    },
    it: {
        title: 'Ridurre la tua impronta di carbonio',
        listItem1: 'Efficienza energetica: Utilizza elettrodomestici ad alta efficienza energetica, spegni luci e apparecchi elettronici quando non sono in uso, e isola la tua casa per ridurre i bisogni di riscaldamento e raffreddamento.',
        listItem2: 'Trasporti: Scegli modi di trasporto ecologici come camminare, andare in bicicletta, fare car-pooling o utilizzare i mezzi pubblici. Valuta il passaggio a veicoli elettrici o ibridi.',
        listItem3: 'Vita sostenibile: Adotta una dieta a base vegetale, riduci il consumo di carne, acquista cibi locali e biologici e minimizza gli sprechi alimentari attraverso la pianificazione dei pasti e il compostaggio.',
        listItem4: 'Riduzione dei rifiuti: Ricicla, riutilizza e riutilizza materiali ogni volta che è possibile. Evita plastica monouso e opta per alternative riutilizzabili.',
        listItem5: 'Energia rinnovabile: Supporta fonti di energia rinnovabile come solare, eolica ed idroelettrica. Valuta l\'installazione di pannelli solari o l\'acquisto di energia verde dal tuo fornitore di servizi pubblici.'
    },
};


const useStyles = makeStyles((theme) => ({
    section: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: 0, // Set initial opacity to 0
        transform: 'translateX(50%)', // Set initial translateX value to push content to the right
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
        maxWidth: '50%', // Adjust the width as needed
        textAlign: 'justify',
        margin: theme.spacing(2), // Add margin to the text container
    },
    imageContainer: {
        maxWidth: '50%', // Adjust the width as needed
        margin: theme.spacing(1), // Add margin to the image container
        padding: theme.spacing(1), // Add padding to the image container
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
        transition: 'transform 0.5s ease', // Apply transition
    },
    listItem: {
        marginBottom: theme.spacing(1), // Add margin between list items
    },
}));

function Infopage3() {
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

    const translatedTitle = translations[selectedLanguage].title;
    const translatedListItems = [
        translations[selectedLanguage].listItem1,
        translations[selectedLanguage].listItem2,
        translations[selectedLanguage].listItem3,
        translations[selectedLanguage].listItem4,
        translations[selectedLanguage].listItem5,
    ];

    return (
        <Container>
            <section className={classes.section}>
                <Typography variant="h3" className={classes.title}>
                    {translatedTitle}
                </Typography>
                <div className={classes.contentContainer}>
                    <div className={classes.imageContainer}>
                        <img src={PlaceholderImage} alt="Understanding Carbon Emissions" className={classes.image} />
                    </div>
                    <div className={classes.content}>
                        <List>
                            {translatedListItems.map((item, index) => (
                                <ListItem className={classes.listItem} key={index}>
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Infopage3;