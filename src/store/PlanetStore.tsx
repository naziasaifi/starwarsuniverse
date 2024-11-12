import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../model/Planet';

const planetSlice = createSlice({
  name: 'planetStore',
  initialState: {
    value: {} as Record<string, Planet>,
  },
  reducers:   
 {
    add: (state, action: PayloadAction<Planet>) => {
      state.value[action.payload.url] = action.payload;
    },
    remove: (state, action:PayloadAction<string>) => {
      delete state.value[action.payload];
    },
  },
});

export const { add, remove } = planetSlice.actions;
export default planetSlice;