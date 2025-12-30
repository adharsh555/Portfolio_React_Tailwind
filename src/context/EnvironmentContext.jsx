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
    const [timeMode, setTimeMode] = useState('day'); // 'day' or 'night'
    const [season, setSeason] = useState('spring'); // 'spring', 'summer', 'monsoon', 'winter'
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
            const now = new Date();
            const hour = now.getHours();
            const month = now.getMonth(); // 0-11

            // Only auto-update if the user hasn't manually toggled it
            if (!isManual) {
                if (hour >= 6 && hour < 18) {
                    setTimeMode('day');
                    document.documentElement.classList.remove('dark');
                } else {
                    setTimeMode('night');
                    document.documentElement.classList.add('dark');
                }
            }

            // Seasonal Logic (always auto-updates)
            if (month >= 1 && month <= 2) {
                setSeason('spring');
            } else if (month >= 3 && month <= 5) {
                setSeason('summer');
            } else if (month >= 6 && month <= 8) {
                setSeason('monsoon');
            } else {
                setSeason('winter');
            }
        };

        updateEnvironment();
        const interval = setInterval(updateEnvironment, 60000);

        return () => clearInterval(interval);
    }, [isManual]);

    return (
        <EnvironmentContext.Provider value={{ timeMode, season, toggleTheme }}>
            {children}
        </EnvironmentContext.Provider>
    );
};
