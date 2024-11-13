import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const useStyles = makeStyles({
    arrowButton: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        transition: 'transform 0.3s, color 0.3s',
        '&:hover': {
            transform: 'scale(1.2) rotate(180deg)',
            color: '#007bff', // Vibrant blue color
        },
    },
});

interface Webinar {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    route: string;
}

const WebinarCard: React.FC<{ webinar: Webinar }> = ({ webinar }) => {
    const navigate = useNavigate();

    const handleViewWebinar = () => {
        navigate(webinar.route);
    };

    return (
        <Grid item xs={3} onClick={handleViewWebinar} style={{ cursor: 'pointer' }}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', boxShadow: 'none' }}>
                <CardContent style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '10px' }}>
                    <div style={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                        <img
                            src={webinar.imageUrl}
                            alt={webinar.title}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                        />
                    </div>
                    <div style={{ padding: '10px' }}>
                        <Typography variant="h6" gutterBottom>
                            {webinar.title}
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '5px' }}>
                                <Typography variant="body2" color="textSecondary">
                                    {webinar.date}
                                </Typography>
                            </div>
                            <Typography variant="body2" color="textSecondary">
                                {webinar.description}
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
};

const WebinarList: React.FC<{ webinars: Webinar[] }> = ({ webinars }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % webinars.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + webinars.length) % webinars.length);
    };

    const classes = useStyles();

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Grid container spacing={2} style={{ transform: `translateX(-${currentIndex * 25}%)`, transition: 'transform 0.8s' }}>
                {webinars.map((webinar, index) => (
                    <WebinarCard key={index} webinar={webinar} />
                ))}
            </Grid>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button onClick={handlePrev} className={classes.arrowButton} style={{ marginRight: '10px' }}>
                    <ArrowBackIcon style={{ fontSize: '32px', color: '#000' }} />
                </button>
                <button onClick={handleNext} className={classes.arrowButton}>
                    <ArrowForwardIcon style={{ fontSize: '32px', color: '#000' }} />
                </button>
            </div>
        </div>
    );
};

const WebinarSection: React.FC = () => {
    const webinars: Webinar[] = [
        {
            title: 'Communicating your environmental action with transparency',
            date: 'April 10, 2024',
            description: 'There has been a proliferation of green claims as businesses reduce their climate impact, empowering consumers to choose products or brands that are taking positive environmental action.',
            imageUrl: '/src/Prathush/images/smoke.jpg',
            route: '/webinar/webinar1'
        },
        {
            title: 'Decarbonising the construction industry: Data quality in the value chain',
            date: 'December 15, 2025',
            description: 'The time is now for construction companies to make their climate ambitions concrete. Watch our webinar below, where our experts discuss the challenges and opportunities related to data quality and decarbonisation in the construction secto',
            imageUrl: '/src/Prathush/images/smoke 2.jpeg',
            route: '/webinar/webinar2'
        },
        {
            title: 'How to talk about carbon with the Carbon Trust: Marketer guide to sustainability',
            date: 'May 1, 2025',
            description: 'Our experts, John Newton, and Anna McShane, hosted a webinar organised by Provenance on the difference between the myriad of climate-related buzzwords and how to obtain and communicate your business’ carbon impact.',
            imageUrl: '/src/Prathush/images/smoke3.jpg',
            route: '/webinar/webinar3'
        },
        {
            title: 'Transition planning: How to assess your climate risks and opportunities',
            date: 'October 15, 2026',
            description: 'Increasingly, financial regulators and investors are focused on ensuring the private sector is ready for the risks and opportunities of climate change.',
            imageUrl: '/src/Prathush/images/smoke4.jpg',
            route: '/webinar/webinar4'
        },
    ];

    return (
        <div style={{ background: `url('src/images/co2_small.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '10vh', padding: '20px' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h4" gutterBottom style={{ color: '#000' }}>
                    Watch Our Recent Webinars
                </Typography>
                <WebinarList webinars={webinars} />
            </div>
        </div>
    );
};

export default WebinarSection;