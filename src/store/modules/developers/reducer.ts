import { createSlice } from "@reduxjs/toolkit";

type Developer = {
  id: number;
  photo: string;
  name: string;
  category: number;
  stack: number;
  state: number;
  description: string;
};

type initialStateProps = {
  developers: Developer[];
};

const initialState: initialStateProps = {
  developers: [],
};

const developersSlice = createSlice({
  name: "developers",
  initialState,
  reducers: {
    setDevelopers: (state, action) => {
      state.developers = [...action.payload];
    },
  },
});

export const { setDevelopers } = developersSlice.actions;

export const getDevelopers: (state: initialStateProps) => Developer[] = (
  state
) => state.developers;

export default developersSlice.reducer;
