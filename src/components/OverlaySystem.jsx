import React, { useMemo } from 'react';
import { useEnvironment } from '../context/EnvironmentContext';

export const OverlaySystem = () => {
    const { timeMode } = useEnvironment();

    const stars = useMemo(() => {
        if (timeMode !== 'night') return [];
        return Array.from({ length: 80 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 10}s`,
            duration: `${2 + Math.random() * 3}s`,
            size: `${Math.random() * 2 + 1}px`
        }));
    }, [timeMode]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
            {/* Night Sky Elements */}
            {timeMode === 'night' && (
                <div className="absolute inset-0">
                    {/* Twinkling Stars */}
                    {stars.map(star => (
                        <div
                            key={`star-${star.id}`}
                            className="absolute bg-white rounded-full animate-[star-twinkle_1.5s_infinite_ease-in-out]"
                            style={{
                                top: star.top,
                                left: star.left,
                                width: star.size,
                                height: star.size,
                                animationDelay: star.delay,
                                animationDuration: star.duration,
                                boxShadow: '0 0 5px rgba(255,255,255,0.5)'
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
