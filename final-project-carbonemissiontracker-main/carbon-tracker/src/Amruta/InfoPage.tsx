/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/
import React, {useState, useEffect, useContext} from 'react';
import { Typography, Container } from '@material-ui/core';
import PlaceholderImage from '../Images/image1.jpg';
import './styles/infopage.scss'; // Import SCSS file
import {LanguageContext} from "../contexts/LanguageContext.tsx";


const translations = {
    en: {
        'Understanding Carbon Emissions': 'Understanding Carbon Emissions',
        'Carbon emissions are the release of greenhouse gases, such as carbon dioxide (CO2), into the atmosphere over a period of time. The burning of fossil fuels, such as coal, petroleum, and natural gas, is the primary source of carbon emissions. These emissions are also known as carbon pollution, and they are considered harmful to the planet because CO2 absorbs heat and traps it in the atmosphere, warming the Earth. This warming causes climate change, leading to more severe storms, drought, and changing sea levels.': 'Carbon emissions are the release of greenhouse gases, such as carbon dioxide (CO2), into the atmosphere over a period of time. The burning of fossil fuels, such as coal, petroleum, and natural gas, is the primary source of carbon emissions. These emissions are also known as carbon pollution, and they are considered harmful to the planet because CO2 absorbs heat and traps it in the atmosphere, warming the Earth. This warming causes climate change, leading to more severe storms, drought, and changing sea levels.'
    },
    de: {
        'Understanding Carbon Emissions': 'Verständnis für Kohlenstoffemissionen',
        'Carbon emissions are the release of greenhouse gases, such as carbon dioxide (CO2), into the atmosphere over a period of time. The burning of fossil fuels, such as coal, petroleum, and natural gas, is the primary source of carbon emissions. These emissions are also known as carbon pollution, and they are considered harmful to the planet because CO2 absorbs heat and traps it in the atmosphere, warming the Earth. This warming causes climate change, leading to more severe storms, drought, and changing sea levels.': 'Kohlenstoffemissionen sind die Freisetzung von Treibhausgasen wie Kohlendioxid (CO2) über einen bestimmten Zeitraum in die Atmosphäre. Die Verbrennung fossiler Brennstoffe wie Kohle, Erdöl und Erdgas ist die Hauptquelle für Kohlenstoffemissionen. Diese Emissionen werden auch als Kohlenstoffverschmutzung bezeichnet und gelten als schädlich für den Planeten, da CO2 Wärme absorbiert und in der Atmosphäre einfängt, was die Erde erwärmt. Diese Erwärmung führt zu stärkeren Stürmen, Dürren und sich ändernden Meeresspiegeln.'
    },
    fr: {
        'Understanding Carbon Emissions': 'Comprendre les émissions de carbone',
        'Carbon emissions are the release of greenhouse gases, such as carbon dioxide (CO2), into the atmosphere over a period of time. The burning of fossil fuels, such as coal, petroleum, and natural gas, is the primary source of carbon emissions. These emissions are also known as carbon pollution, and they are considered harmful to the planet because CO2 absorbs heat and traps it in the atmosphere, warming the Earth. This warming causes climate change, leading to more severe storms, drought, and changing sea levels.': 'Les émissions de carbone sont la libération de gaz à effet de serre, tels que le dioxyde de carbone (CO2), dans latmosphère sur une période de temps. La combustion de combustibles fossiles, tels que le charbon, le pétrole et le gaz naturel, est la principale source démissions de carbone. Ces émissions sont également connues sous le nom de pollution par le carbone, et elles sont considérées comme nuisibles à la planète car le CO2 absorbe la chaleur et la piège dans latmosphère, réchauffant la Terre. Ce réchauffement provoque des changements climatiques, entraînant des tempêtes plus violentes, des sécheresses et des changements de niveaux de la mer.'
    },
    es: {
        'Understanding Carbon Emissions': 'Comprendiendo las emisiones de carbono',
        'Carbon emissions are the release of greenhouse gases, such as carbon dioxide (CO2), into the atmosphere over a period of time. The burning of fossil fuels, such as coal, petroleum, and natural gas, is the primary source of carbon emissions. These emissions are also known as carbon pollution, and they are considered harmful to the planet because CO2 absorbs heat and traps it in the atmosphere, warming the Earth. This warming causes climate change, leading to more severe storms, drought, and changing sea levels.': 'Las emisiones de carbono son la liberación de gases de efecto invernadero, como el dióxido de carbono (CO2), en la atmósfera durante un período de tiempo. La quema de combustibles fósiles, como el carbón, el petróleo y el gas natural, es la principal fuente de emisiones de carbono. Estas emisiones también se conocen como contaminación por carbono y se consideran dañinas para el planeta porque el CO2 absorbe el calor y lo atrapa en la atmósfera, calentando la Tierra. Este calentamiento provoca cambios climáticos, lo que conduce a tormentas más severas, sequías y cambios en los niveles del mar.'
    },
    it: {
        'Understanding Carbon Emissions': 'Comprensione delle emissioni di carbonio"',
        'Carbon emissions are the release of greenhouse gases, such as carbon dioxide (CO2), into the atmosphere over a period of time. The burning of fossil fuels, such as coal, petroleum, and natural gas, is the primary source of carbon emissions. These emissions are also known as carbon pollution, and they are considered harmful to the planet because CO2 absorbs heat and traps it in the atmosphere, warming the Earth. This warming causes climate change, leading to more severe storms, drought, and changing sea levels.': 'Le emissioni di carbonio sono il rilascio di gas serra, come il biossido di carbonio (CO2), nell atmosfera nel corso del tempo. La combustione di combustibili fossili, come carbone, petrolio e gas naturale, è la principale fonte di emissioni di carbonio. Queste emissioni sono anche conosciute come inquinamento da carbonio e sono considerate dannose per il pianeta perché il CO2 assorbe il calore e lo intrappola nell atmosfera, riscaldando la Terra. Questo riscaldamento provoca cambiamenti climatici, portando a tempeste più gravi, siccità e cambiamenti nei livelli del mare.'
    },
};

const Infopage: React.FC = () => {
    const { selectedLanguage } = useContext(LanguageContext);  // Get selectedLanguage from context
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            // Set isVisible to true when user scrolls down
            if (scrollY > 100) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container>
            <section className={`section ${isVisible ? 'visible' : ''}`}>
                <Typography variant="h3" className="title">
                    {translations[selectedLanguage]['Understanding Carbon Emissions']}
                </Typography>
                <div className="contentContainer">
                    <div className={`content ${isVisible ? 'slide-in' : 'hidden'}`}>
                        <Typography variant="body1">
                            {translations[selectedLanguage]['Carbon emissions are the release of greenhouse gases, such as carbon dioxide (CO2), into the atmosphere over a period of time. The burning of fossil fuels, such as coal, petroleum, and natural gas, is the primary source of carbon emissions. These emissions are also known as carbon pollution, and they are considered harmful to the planet because CO2 absorbs heat and traps it in the atmosphere, warming the Earth. This warming causes climate change, leading to more severe storms, drought, and changing sea levels.']}
                        </Typography>
                    </div>
                    <div className={`imageContainer ${isVisible ? 'slide-in' : 'hidden'}`}>
                        <img src={PlaceholderImage} alt={translations[selectedLanguage]['Understanding Carbon Emissions']} className="image" />
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Infopage;