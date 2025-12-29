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

    useEffect(() => {
        const updateEnvironment = () => {
            const now = new Date();
            const hour = now.getHours();
            const month = now.getMonth(); // 0-11

            // Time Logic (6 AM - 6 PM is Day)
            if (hour >= 6 && hour < 18) {
                setTimeMode('day');
                document.documentElement.classList.remove('dark');
            } else {
                setTimeMode('night');
                document.documentElement.classList.add('dark');
            }

            // Seasonal Logic
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
    }, []);

    return (
        <EnvironmentContext.Provider value={{ timeMode, season }}>
            {children}
        </EnvironmentContext.Provider>
    );
};
