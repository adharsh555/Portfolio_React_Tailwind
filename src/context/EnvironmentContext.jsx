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
    const [season, setSeason] = useState('spring');
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
            const month = now.getMonth();

            // Set initial dark class for night mode
            if (timeMode === 'night') {
                document.documentElement.classList.add('dark');
            }

            // Only auto-update if NOT manual AND NOT explicitly forced to night
            if (!isManual) {
                // We prioritize night mode as requested, but keep seasonal logic
                // If the user wants "ALWAYS in night mode" unless changed,
                // we should disable the auto-day-switch.
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
        // Removed the interval that forced day mode
    }, [isManual, timeMode]);

    return (
        <EnvironmentContext.Provider value={{ timeMode, season, toggleTheme }}>
            {children}
        </EnvironmentContext.Provider>
    );
};
