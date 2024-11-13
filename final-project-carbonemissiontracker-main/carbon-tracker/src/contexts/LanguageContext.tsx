/************
 * This code was made to acommondate for the multi-language options, the implementation was very difficult to implement in
 * the overall project, so this context provider is created to help with that
 * author: Zehao Song
 ************/

import React from "react";

type LanguageContextType = {
    selectedLanguage: string;
    setSelectedLanguage: (value: string) => void;
};

export const LanguageContext = React.createContext<LanguageContextType>({ selectedLanguage: 'en',
    setSelectedLanguage: () => console.warn('no language provider') });