import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchApi = createAsyncThunk("api",async ()=>{
    let API = await axios.get('https://fakestoreapi.com/products')
    let Data = API.data
    return Data
 })
export const SliceKey = createSlice({
    name: "SliceKey",
    initialState : { data:[],loading:true},
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
    }
})
export default SliceKey.reducer