import React from 'react';
import { ArrowUp, Code2, Heart } from "lucide-react";
import { cn } from '../lib/utils';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 md:py-12 px-4 sm:px-6 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold tracking-tight text-sm md:text-base">Adharsh P Ajayakumar</span>
        </div>

        <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 fill-red-500" /> & React
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-muted-foreground order-2 sm:order-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 md:p-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-110 active:scale-95 shadow-lg shadow-primary/20 order-1 sm:order-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
