import React from 'react';

// Define the WebinarPage4 component as a functional component
const WebinarPage4: React.FC = () => {
    // Render the component JSX
    return (
        <div>
            {/* Main heading for the section */}
            <h2>Our work and Impact</h2>
            <div>
                {/* Title of the webinar */}
                <h1>Transition planning: How to assess your climate risks and opportunities</h1>
                {/* Description of the webinar */}
                <p>
                    Companies undertaking a climate risk assessment as part of their transition plan must identify and assess the materiality of climate-related risks and opportunities, including physical and transition risks, as well as the company's resilience to such risks. The European Union’s Corporate Sustainability Reporting Directive (CSRD), ISSB, and the Task Force on Climate-related Financial Disclosures (TCFD), the world’s leading climate reporting framework, are all intended to improve companies’ disclosure of climate- and sustainability-related risks and opportunities.
                </p>
                {/* Subheading for discussion topics */}
                <h2>Discussion Topics</h2>
                {/* List of discussion topics */}
                <ul>
                    {/* Individual discussion topics */}
                    <li>Practical outline and alignment of climate risk compliance frameworks, including TCFD and CSRD</li>
                    <li>Best practice for climate risk and opportunity assessment. Identifying risks and opportunities in order to build resilience and harness upcoming revenue streams</li>
                    <li>Actionable steps you can take now to prepare for disclosure and how the Carbon Trust can support you</li>
                </ul>
            </div>
        </div>
    );
};

// Export the WebinarPage4 component as default
export default WebinarPage4;