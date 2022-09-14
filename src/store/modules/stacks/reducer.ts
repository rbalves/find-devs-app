import { createSlice } from "@reduxjs/toolkit";

type Stack = { id: number; label: string };

type initialStateProps = {
  stacks: Stack[];
};

const initialState: initialStateProps = {
  stacks: [],
};

const stacksSlice = createSlice({
  name: "stacks",
  initialState,
  reducers: {
    setStacks: (state, action) => {
      state.stacks = [...state.stacks, ...action.payload];
    },
  },
});

export const { setStacks } = stacksSlice.actions;

export const getStacks: (state: initialStateProps) => Stack[] = (state) =>
  state.stacks;

export default stacksSlice.reducer;
