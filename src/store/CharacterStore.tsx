import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Character from '../model/Character';

const characterSlice = createSlice({
  name: 'characterStore',
  initialState: {
    value: {} as Record<string, Character>,
  },
  reducers:   
 {
    add: (state, action: PayloadAction<Character>) => {
      state.value[action.payload.url] = action.payload;
    },
    addAll: (state, action: PayloadAction<Character[]>) => {
      if(action.payload){
        action.payload.map((d:Character)=>{
          state.value[d.url] = d;
        });
      }
    },
    remove: (state, action:PayloadAction<string>) => {
      delete state.value[action.payload];
    }
  },
});

export const { add, addAll, remove } = characterSlice.actions;
export default characterSlice;