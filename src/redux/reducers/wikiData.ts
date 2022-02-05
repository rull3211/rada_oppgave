import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from '../../common/types';
export interface WikiData {
  pages: Page[];
  selectedPage: Page | null;
  status: 'idle' | 'searching' | 'failed' | 'none found';
}

const initialState: WikiData = {
  pages: [],
  selectedPage: null,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'wikiData',
  initialState,
  reducers: {
    searching: (state) => {
      state.pages = []
      state.status = "searching"
    },
    failed: (state) => {
      state.status = "none found"
    },
    success: (state, action :PayloadAction<Page[]>) => {
      action.payload.length > 0 ? state.status = "idle" : state.status = "none found"
      state.pages = action.payload
    },
    selectAction:(state, action: PayloadAction<Page>) =>{
      state.selectedPage = action.payload
    },
    deSelectAction:(state) =>{
      state.selectedPage = null
    }
  },
});

export const { searching, failed, success, selectAction, deSelectAction } = counterSlice.actions;



export default counterSlice.reducer;
