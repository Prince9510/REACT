import { configureStore } from "@reduxjs/toolkit";
import SliceKeyReducer from "../Slice/Slice";

export const store = configureStore({
    reducer: {
        pageKey: SliceKeyReducer, 
    },
});
