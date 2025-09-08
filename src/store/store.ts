// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices/modeSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});

// Типи для використання у хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
