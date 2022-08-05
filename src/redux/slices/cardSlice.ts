import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Daily,ICardState } from "./type";



const initialState:ICardState={
    weather:{} as Daily,
    isOpen:false
}




 const cardSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{
        openDetails:(state,action:PayloadAction<Daily>)=>{
            state.isOpen = true
            state.weather = action.payload
        },
        closeDetails:(state)=>{
            state.isOpen = false
            state.weather = {} as Daily
        }
    },
})

export const {openDetails,closeDetails} = cardSlice.actions

export default cardSlice.reducer