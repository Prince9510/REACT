import { createSlice } from "@reduxjs/toolkit";

export const Expence = createSlice({
    name: "Expence",
    initialState: {
        storeData: [], // Store the debit transactions
    },
    reducers: {
        Money: (state, action) => {
            state.storeData.push(action.payload)
        }
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { Money } = Expence.actions
export default Expence.reducer
