import React, { createContext, useContext, useEffect, useState } from 'react';

const EnvironmentContext = createContext();

export const useEnvironment = () => {
    const context = useContext(EnvironmentContext);
    if (!context) {
        throw new Error('useEnvironment must be used within an EnvironmentProvider');
    }
    return context;
};

export const EnvironmentProvider = ({ children }) => {
    const [timeMode, setTimeMode] = useState('night'); // Default to night
    const [isManual, setIsManual] = useState(false);

    const toggleTheme = () => {
        setIsManual(true);
        setTimeMode(prev => {
            const newMode = prev === 'day' ? 'night' : 'day';
            if (newMode === 'night') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newMode;
        });
    };

    useEffect(() => {
        const updateEnvironment = () => {
            // Set initial dark class for night mode
            if (timeMode === 'night') {
                document.documentElement.classList.add('dark');
            }
        };

        updateEnvironment();
    }, [timeMode]);

    return (
        <EnvironmentContext.Provider value={{ timeMode, toggleTheme }}>
            {children}
        </EnvironmentContext.Provider>
    );
};
