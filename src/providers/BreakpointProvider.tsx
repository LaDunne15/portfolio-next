'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

type BreakpointContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const BreakpointContext = createContext<BreakpointContextType | undefined>(undefined);

export const BreakpointProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <BreakpointContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </BreakpointContext.Provider>
  );
};

export function useBreakpoint(): BreakpointContextType {
  const context = useContext(BreakpointContext);
  if (!context) {
    throw new Error('useBreakpoint must be used within BreakpointProvider');
  }
  return context;
}
