import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface CounterState {
//   value: string;
// }

// const initialState: CounterState = {
//   value: "closed",
// };
const initialState = {}

export const photoSlice = createSlice({
    name: "PhotoSearched",
    initialState,
    reducers: {
        // showModal: (state) => {
        //   state.value = "open";
        // },

    },
});

// Action creators are generated for each case reducer function
// export const { showModal, closeModal } = photoSlice.actions;

export default photoSlice;