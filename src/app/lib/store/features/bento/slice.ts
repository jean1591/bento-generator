import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialGrid } from "./initialGrid";

export enum Size {
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
}

type TextStyle = {
  colour: string;
  fontSize: Size;
  uppercase: boolean;
};

export type Text = {
  value: string;
  style: TextStyle;
};

export type Cell = {
  colSpan: number;
  hidden: boolean;
  label: Text;
  rowSpan: number;
  title: Text;
};

export type Grid = Cell[];

export interface BentoSlice {
  grid: Grid;
  selectedCell: number | null;
}

const initialState: BentoSlice = { grid: initialGrid, selectedCell: null };

export const bentoSlice = createSlice({
  name: "bentoSlice",
  initialState,
  reducers: {
    updateCell: (
      state,
      action: PayloadAction<{ index: number; partialCell: Partial<Cell> }>
    ) => {
      const { partialCell, index } = action.payload;
      state.grid = [...state.grid].map((cell, i) =>
        i === index ? { ...cell, ...partialCell } : cell
      );
    },
    setSelectedCell: (state, action: PayloadAction<number>) => {
      if (state.selectedCell === action.payload) {
        state.selectedCell = null;
      } else {
        state.selectedCell = action.payload;
      }
    },
  },
});

export const { updateCell, setSelectedCell } = bentoSlice.actions;

export default bentoSlice.reducer;
