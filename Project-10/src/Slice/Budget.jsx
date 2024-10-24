/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { Money } from "./Expence";

export const Budget = createSlice({
    name: "Budget",
    initialState: {
        count: 0, // Changed from amount to count
    },
    reducers: {
        BudgetAdd(state, action) {
            state.count += Number(action.payload) // Corrected from amount to count
        },
    },
    extraReducers: (builder) => {
        builder.addCase(Money, (state, action) => {
            state.count -= Number(action.payload.debitAmount) // Corrected to use deb value
        })
    }
})

export const { BudgetAdd } = Budget.actions
export default Budget.reducer
