import { Bento, generateEmptyBento } from "@/utils";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CellCoordinates {
  rowIndex: number;
  columnIndex: number;
}

export interface BentoSettingsState {
  bento: Bento;
  selectedCellOne: CellCoordinates | null;
  selectedCellTwo: CellCoordinates | null;
}

const initialState: BentoSettingsState = {
  bento: generateEmptyBento(3, 3),
  selectedCellOne: null,
  selectedCellTwo: null,
};

export const bentoSettingsSlice = createSlice({
  name: "bentoSettings",
  initialState,
  reducers: {
    setBento: (state, action: PayloadAction<Bento>) => {
      state.bento = action.payload;
    },
    setSelectedCellOne: (state, action: PayloadAction<CellCoordinates>) => {
      state.selectedCellOne = action.payload;
    },
    setSelectedCellTwo: (state, action: PayloadAction<CellCoordinates>) => {
      state.selectedCellTwo = action.payload;
    },
  },
});

export const { setBento, setSelectedCellOne, setSelectedCellTwo } =
  bentoSettingsSlice.actions;

export default bentoSettingsSlice.reducer;
