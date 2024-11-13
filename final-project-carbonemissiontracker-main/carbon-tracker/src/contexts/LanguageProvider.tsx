/************
 * Simlar to the LangaugeContext this provider simply takes the context and wrap it over any children
 * author: Zehao Song
 ************/
import React, {useState} from "react";
import {LanguageContext} from "./LanguageContext";

type LanguageProviderProps = {
    children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};