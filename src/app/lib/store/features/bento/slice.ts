import { createSlice } from "@reduxjs/toolkit";

export interface BentoSlice {}

const initialState: BentoSlice = { user: null };

export const bentoSlice = createSlice({
  name: "bentoSlice",
  initialState,
  reducers: {},
});

export const {} = bentoSlice.actions;

export default bentoSlice.reducer;
