/************
 * This is the layout component for the appbar on the main page, it is implemented to improve efficiency
 * author: Zehao Song
 ************/
import React from 'react';
import {LanguageProvider} from "../contexts/LanguageProvider.tsx";
import MainMenuDropdown from "../Amruta/MainMenuDropdown.tsx";
import Footer from "../Amruta/Foorter.tsx";

type LayoutProps = {
    children: React.ReactNode;  // Allows passing a children as props
};

const Main_Bar_Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LanguageProvider>
            <MainMenuDropdown />
            {children}
            <Footer />
        </LanguageProvider>
    );
};

export default Main_Bar_Layout;