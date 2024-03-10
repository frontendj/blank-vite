import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    initialState: 0,
    name: 'counter',
    reducers: {
        decrement: (state) => state - 1,
        increment: (state) => state + 1,
    },
});

export const { decrement, increment } = counterSlice.actions;

export default counterSlice.reducer;
