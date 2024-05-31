import { Bento, generateEmptyBento, generateRandomBento } from "@/utils";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CellCoordinates {
  rowIndex: number;
  columnIndex: number;
}

export interface BentoSettingsState {
  bento: Bento;
  columnNumber: number;
  displayCopyToast: boolean;
  emptyBento: Bento;
  rowNumber: number;
  selectedCellOne: CellCoordinates | null;
  selectedCellTwo: CellCoordinates | null;
}

const initialState: BentoSettingsState = {
  bento: generateRandomBento(6, 5),
  columnNumber: 6,
  displayCopyToast: false,
  emptyBento: generateEmptyBento(3, 3),
  rowNumber: 5,
  selectedCellOne: null,
  selectedCellTwo: null
};

export const bentoSettingsSlice = createSlice({
  name: "bentoSettings",
  initialState,
  reducers: {
    setBento: (state) => {
      state.bento = generateRandomBento(state.columnNumber, state.rowNumber);
      state.displayCopyToast = false;
    },
    setColumnNumber: (state, action: PayloadAction<number>) => {
      state.columnNumber = action.payload;
      state.bento = generateRandomBento(state.columnNumber, state.rowNumber);
      state.emptyBento = generateEmptyBento(state.columnNumber, state.rowNumber);
      state.displayCopyToast = false;
    },
    setRowNumber: (state, action: PayloadAction<number>) => {
      state.rowNumber = action.payload;
      state.bento = generateRandomBento(state.columnNumber, state.rowNumber);
      state.emptyBento = generateEmptyBento(state.columnNumber, state.rowNumber);
      state.displayCopyToast = false;
    },
    setDisplayCopyToast: (state, action: PayloadAction<boolean>) => {
      state.displayCopyToast = action.payload;
    },
    setSelectedCellOne: (state, action: PayloadAction<CellCoordinates>) => {
      state.selectedCellOne = action.payload;
    },
    setSelectedCellTwo: (state, action: PayloadAction<CellCoordinates>) => {
      state.selectedCellTwo = action.payload;
    },
  },
});

export const { setBento, setDisplayCopyToast, setColumnNumber, setRowNumber, setSelectedCellOne,
  setSelectedCellTwo } =
  bentoSettingsSlice.actions;

export default bentoSettingsSlice.reducer;
