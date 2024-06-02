import { Bento, generateEmptyBento } from "@/utils";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CellCoordinates {
  columnIndex: number;
  rowIndex: number;
}

export interface BentoSettingsState {
  bento: Bento;
  mergeButtonDisable: boolean;
  selectedCellOne: CellCoordinates | null;
  selectedCellTwo: CellCoordinates | null;
}

const initialState: BentoSettingsState = {
  bento: generateEmptyBento(4, 4),
  mergeButtonDisable: true,
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
    setMergeButtonDisable: (state, action: PayloadAction<boolean>) => {
      state.mergeButtonDisable = action.payload;
    },
    setSelectedCellOne: (
      state,
      action: PayloadAction<CellCoordinates | null>
    ) => {
      state.selectedCellOne = action.payload;
    },
    setSelectedCellTwo: (
      state,
      action: PayloadAction<CellCoordinates | null>
    ) => {
      state.selectedCellTwo = action.payload;
    },
  },
});

export const {
  setBento,
  setMergeButtonDisable,
  setSelectedCellOne,
  setSelectedCellTwo,
} = bentoSettingsSlice.actions;

export default bentoSettingsSlice.reducer;
