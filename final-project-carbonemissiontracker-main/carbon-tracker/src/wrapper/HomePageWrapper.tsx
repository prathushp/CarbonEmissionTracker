/************
 * Just a simple Wrapper that includes all pages needed for Homepage
 * author: Zehao Song
 ************/
// import Hexagon from "../Amruta/Hexagon.tsx";
import HomePage from "../Amruta/HomePage.tsx";
import EventsList from "../Prathush/pages/EventsList.tsx";
import Webinar from "../Prathush/pages/Webinar.tsx";
import Lower from "../Prathush/pages/Lower.tsx";
import Box from "@mui/material/Box";
import EventsPage from "../Prathush/pages/EventsPage.tsx";
import Demo from "../Amruta/Demo.tsx";
import Infopage from "../Amruta/InfoPage.tsx";
import InfoPage2 from "../Amruta/InfoPage2.tsx";
import InfoPage3 from "../Amruta/InfoPage3.tsx";
import InfoPage4 from "../Amruta/InfoPage4.tsx";
import InfoPage5 from "../Amruta/InfoPage5.tsx";

export const HomePageWrapper: React.FC = () => {
    return (
        <>
            <Box paddingBottom="100px">
                <HomePage />
                <br/>
                <Infopage/>
                <InfoPage2/>
                <InfoPage3/>
                <InfoPage4/>
                <InfoPage5/>
                <EventsPage/>
                <EventsList/>
                <Webinar />
                <br/>
                <Demo/>
                <Lower/>
            </Box>
        </>
    );
};