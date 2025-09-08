// src/store/slices/modeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModeType = 'full' | 'light';

interface ModeState {
  value: ModeType;
}

const initialState: ModeState = {
  value: 'full', // дефолтний режим
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ModeType>) => {
      state.value = action.payload;
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
