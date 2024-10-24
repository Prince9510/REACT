import { configureStore } from "@reduxjs/toolkit";
import Budget from "../Slice/Budget";
import Expence from "../Slice/Expence";

export const store = configureStore({
    reducer: {
        BudgetKey: Budget,
        ExpenceKey: Expence
    }
})
