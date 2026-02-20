import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('EN');

    const toggleLanguage = () => {
        setLanguage((prevLang) => {
            if (prevLang === 'EN') return 'HI';
            if (prevLang === 'HI') return 'TE';
            return 'EN';
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
