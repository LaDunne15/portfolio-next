'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';
import { setMode } from './slices/modeSlice';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cookieMode = document.cookie
      .split('; ')
      .find((row) => row.startsWith('mode='))
      ?.split('=')[1] as 'full' | 'light' | undefined;

    if (cookieMode) {
      store.dispatch(setMode(cookieMode));
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
