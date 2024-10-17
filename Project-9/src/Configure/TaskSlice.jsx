import { createSlice } from "@reduxjs/toolkit";
export const count = createSlice({
    name: "count",
    initialState: {
        AllData: []
},
reducers :{
    AddData:(state,action)=>{
    state.AllData.push(action.payload)
    },
    DeleteData:(state,action)=>{
    let data = state.AllData.filter((e)=>e.id != action.payload)
    state.AllData=data
    },
    EditData:(state,action)=>{
    state.AllData.map((e)=>{
        if(e.id == action.payload.id){
            e.name = action.payload.name
            e.description = action.payload.description
            e.assigned = action.payload.assigned
            e.gender = action.payload.gender
            e.priority = action.payload.priority;
    }else{
        e
    }
    })
    }
}
})

export const {AddData,EditData,DeleteData} = count.actions
export default count.reducer;