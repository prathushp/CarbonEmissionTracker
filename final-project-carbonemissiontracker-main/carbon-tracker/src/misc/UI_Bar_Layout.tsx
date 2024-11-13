// misc/UI_Bar_Layout.tsx
/************
 * This code segment is served as the general layout settings for the UI application bar, it is implemented such
 * that all pages related can simply implement this to have the UI_AppBar component at the top of it
 * author: Zehao Song
 ************/

import React from 'react';
import UI_AppBar from '../pages/UI_AppBar';

type LayoutProps = {
    children: React.ReactNode;  // Allows passing a children as props
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <UI_AppBar />
            {children}
        </>
    );
};

export default Layout;