import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Grid,
    TextField,
    Container,

} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../scss/EventList.scss'; // Import the SCSS file

// Define the Event interface for the event data
interface Event {
    _id: number;
    title: string;
    description: string;
    detailedDescription: string; // Add a property for detailed description
    EventDate: string; // Assuming EventDate is a string formatted date
}

// Define the EventList functional component
const EventList: React.FC = () => {
    // Use the useNavigate hook for navigation
    const navigate = useNavigate();
    // Define state variables
    const [events, setEvents] = useState<Event[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Fetch events data on component mount
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get<Event[]>('http://localhost:3000/Events/');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    // Handle event click to navigate to event details page
    const handleEventClick = (eventId: number) => {
        // Redirect to the eventdesc route with the event ID as a parameter
        navigate(`/eventdesc/${eventId}`);
    };

    // Format the event date
    const formatEventDate = (dateString: string) => {
        // Convert the date string to a Date object
        const date = new Date(dateString);
        // Format the date to your desired format, for example:
        return date.toLocaleString(); // This will display the date and time in the user's local timezone
        // return date.toISOString(); // This will display the date and time in UTC format
    };

    // Filter events based on search term
    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.EventDate.toLowerCase().includes(searchTerm.toLowerCase()) || // Search for date and time
        formatEventDate(event.EventDate).toLowerCase().includes(searchTerm.toLowerCase()) // Formatted date and time
    );

    // Render the component
    return (
        <Container maxWidth="lg" className="event-list-container"
                   style={{marginBottom: '100px', backgroundSize: 'cover'}}>
            <br/>
            <br/>
            <Typography variant="h4" gutterBottom className="events-heading" style={{marginTop: '20px'}}>
                Events Available
            </Typography>
            {/* Search input field */}
            <TextField
                placeholder="Search-Events"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{className: 'search-input'}}
            />
            {/* Grid to display events */}
            <Grid container spacing={3}>
                {/* Check if filtered events are available */}
                {filteredEvents.length > 0 ? (
                    // Map through filtered events and display each event as a card
                    filteredEvents.map((event, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                className="event-card"
                                style={{
                                    height: '100%',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                    backgroundSize: 'cover', // Ensure the background image covers the entire card
                                    backgroundPosition: 'center', // Center the background image
                                }}
                                onClick={() => handleEventClick(event._id)} // Make the entire card clickable
                            >
                                <CardHeader
                                    title={event.title}
                                    titleTypographyProps={{variant: 'h5', component: 'h2'}}
                                    subheaderTypographyProps={{variant: 'subtitle1'}}
                                />
                                <CardContent className="event-card__content">
                                    {/* Display summarized description */}
                                    <Typography variant="body1" component="p">
                                        {event.description.slice(0, 100)}...
                                    </Typography>
                                    {/* Display formatted event date */}
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Event Date: {formatEventDate(event.EventDate)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    // Display message if no events available
                    <Grid item xs={12}>
                        <Typography variant="body1" component="p" className="no-events-text">
                            No events available.
                        </Typography>
                    </Grid>
                )}
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
    );
};

export default EventList;