import React, { useMemo, useState, useEffect } from 'react';
import { useEnvironment } from '../context/EnvironmentContext';
import { cn } from '../lib/utils';

export const OverlaySystem = () => {
    const { season, timeMode } = useEnvironment();
    const [isWindy, setIsWindy] = useState(false);

    useEffect(() => {
        const toggleWind = () => {
            setIsWindy(prev => !prev);
            const nextInterval = isWindy ? Math.random() * 10000 + 10000 : Math.random() * 5000 + 5000;
            setTimeout(toggleWind, nextInterval);
        };
        const timer = setTimeout(toggleWind, 5000);
        return () => clearTimeout(timer);
    }, [isWindy]);

    const particles = useMemo(() => {
        const count = season === 'summer' ? 0 : 80; // Increased density
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 10}s`, // Wider delay for better distribution
            duration: `${5 + Math.random() * 5}s`,
            size: `${2 + Math.random() * 4}px`,
            opacity: 0.2 + Math.random() * 0.6
        }));
    }, [season]);

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

            {/* Physical Effects Wrapper (affected by wind gust) */}
            <div className={cn(
                "absolute inset-0 transition-transform duration-[2000ms] ease-in-out",
                isWindy ? "animate-[wind-gust_8s_infinite_ease-in-out]" : "translate-x-0"
            )}>
                {/* Seasonal Effects */}
                {season === 'winter' && particles.map(p => (
                    <div
                        key={`snow-${p.id}`}
                        className={cn(
                            "absolute top-[-20px] bg-white rounded-full",
                            "animate-[fall_linear_infinite]"
                        )}
                        style={{
                            left: p.left,
                            width: p.size,
                            height: p.size,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                            opacity: p.opacity,
                        }}
                    />
                ))}

                {season === 'monsoon' && particles.map(p => (
                    <div
                        key={`rain-${p.id}`}
                        className="absolute top-[-20px] bg-blue-400/30 rounded-full animate-[fall_linear_infinite]"
                        style={{
                            left: p.left,
                            width: '1px',
                            height: '20px',
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}

                {season === 'spring' && particles.map(p => (
                    <div
                        key={`petal-${p.id}`}
                        className="absolute top-[-20px] bg-pink-300/60 rounded-full animate-[fall_linear_infinite,sway_ease-in-out_infinite]"
                        style={{
                            left: p.left,
                            width: p.size,
                            height: p.size,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            {season === 'summer' && (
                <div className="absolute inset-0 bg-orange-500/5 animate-[shimmer-heat_10s_linear_infinite] overflow-hidden">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px]" />
                </div>
            )}
        </div>
    );
};
