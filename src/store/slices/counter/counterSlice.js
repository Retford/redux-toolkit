import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
// };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10,
    message: '',
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
      state.message = 'Mad';
    },
    incrementBy: (state, action) => {
      const { quantity } = action.payload;
      state.counter += quantity;
      state.message = 'Retford';
    },
    decrement: (state) => {
      state.counter -= 1;
      state.message = 'Mit';
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementBy, decrement } = counterSlice.actions;
