import React from 'react';
import { Button } from '@material-ui/core';
import backgroundImage from '../images/co2.jpg';
import { useNavigate } from 'react-router-dom';
import '../scss/EventsBackground.scss';

// EventsBackground component
const EventsBackground: React.FC = () => {
    const navigate = useNavigate();

    // Function to handle sign up button click
    const handleSignUpClick = () => {
        // Open SignUpPage in a new window
        navigate('/subscribe');
    };

    return (
        <div className="events-background">
            <div
                className="events-content center-items"
                style={{backgroundImage: `url(${backgroundImage})`}}
            >
                <h2>Events</h2>
                <p>
                    {/* Description */}
                    <h3>
                        The Carbon Trace hosts and participates in a variety of events to
                        support the acceleration to Net Zero. We aim to share insight, foster
                        collaboration, and offer tangible actions.
                    </h3>
                </p>
                {/* Sign up to our newsletter button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSignUpClick}
                    className="signup-button"
                >
                    Sign up to our newsletter
                </Button>
            </div>
        </div>
    );
};

export default EventsBackground;
