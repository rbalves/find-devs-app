import { createSlice } from "@reduxjs/toolkit";

type State = { id: number; value: string };

type initialStateProps = {
  states: State[];
};

const initialState: initialStateProps = {
    states: [],
};

const statesSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setStates: (state, action) => {
      state.states = [...state.states, ...action.payload];
    },
  },
});

export const { setStates } = statesSlice.actions;

export const getStates: (state: initialStateProps) => State[] = (state) =>
  state.states;

export default statesSlice.reducer;
