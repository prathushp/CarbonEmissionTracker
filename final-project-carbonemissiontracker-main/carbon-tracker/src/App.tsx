// App.tsx
/************
 * App.tsx, the main application page of the whole react application
 * author: Zehao Song
 ************/

import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './Redux/Store';
// import {UserProvider} from "./contexts/UserContext";
import UserProvider from "./contexts/UserContext.tsx";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserInterfacePage from './pages/UserInterfacePage';
import Layout from './misc/UI_Bar_Layout';
import SubmitDataPage from "./pages/SubmitDataPage.tsx";
import UserDataRenderPage from "./pages/UserDataRenderPage.tsx";
import {HomePageWrapper} from "./wrapper/HomePageWrapper.tsx";
import Main_Bar_Layout from "./misc/Main_Bar_Layout.tsx";
import { Provider, useDispatch } from 'react-redux';
import { loadUser } from './Redux/UserRedux';

// Amruta
import News from "./Amruta/News.tsx";
import AboutUs from "./Amruta/AboutUs.tsx";
// Prathush
import Webinar1 from "./Prathush/pages/Webinar1.tsx";
import Webinar2 from "./Prathush/pages/Webinar2.tsx";
import Webinar3 from "./Prathush/pages/Webinar3.tsx";
import Webinar4 from "./Prathush/pages/Webinar4.tsx";
import EventList from "./Prathush/pages/EventsList.tsx";
import ContactUsPage from "./Prathush/pages/ContactUsPage.tsx";
import EventDesc from "./Prathush/pages/EventDesc.tsx";
import SubscribePage from "./Prathush/pages/SubscribePage.tsx";


// The component that wraps the entire application
const AppInner: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <Provider store={store}>
            {/*wrap everything related to user within the UserProvider so any component that inside that uses the*/}
            {/*UserContext hook with UserContext can access the provided user data*/}
            <Router>
                {/*The router and routes add routing functionality to the application, this is a wrapper*/}
                <UserProvider>
                    {/*Basically tells React that there are more than one routes, serve as a container*/}
                    <Routes>
                        {/*each route has a path, and the element is the actual page being rendered*/}
                        {/*<Route path="/login" element={<LoginPage />} />*/}
                        {/*<Route path="/signup" element={<SignupPage />} />*/}
                        {/*The below rendered page is surrounded by a extra Layout Element which serves as the user interface app bar*/}
                        <Route path="/user-interface" element={<Layout><UserInterfacePage /></Layout>} />
                        <Route path="/submitdata" element={<Layout><SubmitDataPage /></Layout>} />
                        <Route path="/viewdata" element={<Layout><UserDataRenderPage /></Layout>} />
                        <Route path="/login" element={<Main_Bar_Layout><LoginPage /></Main_Bar_Layout>} />
                        <Route path="/signup" element={<Main_Bar_Layout><SignupPage /></Main_Bar_Layout>} />
                        <Route path= "/" element={<Main_Bar_Layout><HomePageWrapper /></Main_Bar_Layout>} />
                        <Route path= "/news" element={<Main_Bar_Layout><News /></Main_Bar_Layout>} />

                        <Route path="/webinar/webinar1" element={<Main_Bar_Layout><Webinar1 /></Main_Bar_Layout>} />
                        <Route path="/webinar/webinar2" element={<Main_Bar_Layout><Webinar2 /></Main_Bar_Layout>} />
                        <Route path="/webinar/webinar3" element={<Main_Bar_Layout><Webinar3 /></Main_Bar_Layout>} />
                        <Route path="/webinar/webinar4" element={<Main_Bar_Layout><Webinar4 /></Main_Bar_Layout>} />
                        <Route path="/subscribe" element={<Main_Bar_Layout><SubscribePage /></Main_Bar_Layout>} />
                        <Route path="/eventdesc" element={<Main_Bar_Layout><EventDesc /></Main_Bar_Layout>} />
                        <Route path="/contactus" element={<Main_Bar_Layout><ContactUsPage /></Main_Bar_Layout>} />
                        <Route path="/eventlist" element={<Main_Bar_Layout><EventList /></Main_Bar_Layout>} />
                        <Route path="/eventdesc/:eventId" element={<Main_Bar_Layout><EventDesc /></Main_Bar_Layout>} />
                        <Route path= "/aboutus" element={<Main_Bar_Layout><AboutUs /></Main_Bar_Layout>} />
                    </Routes>
                </UserProvider>
            </Router>
        </Provider>
    )
}


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppInner />
        </Provider>
    )
}

export default App;