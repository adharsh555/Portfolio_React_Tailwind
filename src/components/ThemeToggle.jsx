import React from 'react';
import { useEnvironment } from '../context/EnvironmentContext';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
  const { timeMode, toggleTheme } = useEnvironment();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed left-6 top-24 z-[100] group flex items-center justify-center w-16 h-16 rounded-full transition-all duration-700",
        "bg-background/20 backdrop-blur-xl border border-border/50",
        "animate-[orb-float_6s_ease-in-out_infinite] hover:scale-110 active:scale-90",
        "shadow-2xl hover:shadow-primary/20"
      )}
      title={`Switch to ${timeMode === 'day' ? 'Night' : 'Day'} Mode`}
    >
      {/* ... existing morphing orb code ... */}
      <div className={cn(
        "absolute inset-0 rounded-full transition-all duration-1000 animate-[orb-morph_10s_linear_infinite]",
        timeMode === 'day'
          ? "bg-gradient-to-tr from-yellow-400 to-orange-500 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
          : "bg-gradient-to-tr from-indigo-600 to-purple-700 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
      )} />

      {/* Glowing Aura (Attraction Animation) */}
      <div className="absolute inset-[-4px] rounded-full border border-primary/20 animate-[glow-pulse_4s_ease-in-out_infinite]" />

      {/* Icons */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {timeMode === 'day' ? (
          <div className="relative transform group-hover:rotate-12 transition-transform duration-500">
            <Sun className="w-8 h-8 text-white animate-pulse" />
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-200 animate-bounce" />
          </div>
        ) : (
          <div className="relative transform group-hover:-rotate-12 transition-transform duration-500">
            <Moon className="w-8 h-8 text-white" />
            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />
            {/* Tiny orbiting stars */}
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]" />
            </div>
          </div>
        )}
      </div>

      {/* Subtle Tooltip Label (Mobile friendly) */}
      <span className="absolute -right-20 px-3 py-1 bg-card border border-border rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {timeMode === 'day' ? 'Nightfall?' : 'Sunshine?'}
      </span>
    </button>
  );
};
