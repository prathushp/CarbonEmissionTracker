import React from 'react';

// Define the WebinarPage2 component as a functional component
const WebinarPage2: React.FC = () => {
    // Render the component JSX
    return (
        <div>
            {/* Main heading for the section */}
            <h2>Our work and Impact</h2>
            <div>
                {/* Title of the webinar */}
                <h1>Decarbonising the construction industry: Data quality in the value chain</h1>
                {/* Description of the webinar */}
                <p>
                    The built environment is responsible for 40% of annual global emissions. This means almost half of all emissions around the world are linked to the construction, running, or demolition of buildings.
                </p>
                {/* Subheading for topics covered */}
                <h2>Topics Covered in this Webinar</h2>
                <ul>
                    {/* Individual topics covered */}
                    <li>The relationship between construction companies and materials manufacturers and the roles both can play in improving value chain data quality.</li>
                    <li>Solutions to improving data quality and driving decarbonisation.</li>
                    <li>Opportunities available to organisations on their Net Zero journey.</li>
                </ul>
            </div>
        </div>
    );
};

// Export the WebinarPage2 component as default
export default WebinarPage2;