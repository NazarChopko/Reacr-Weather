import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import { IState,CurrentWeather } from "./type";

import {api,coordinateApi} from "../../axios/axios";
import { AxiosResponse } from "axios";

const initialState:IState={
    weather:{} as CurrentWeather,
    isLoading:false,
    error:'',
    lat:0,
    lon:0,
}

export const getCurrentWeather = createAsyncThunk(
    'weather/get',
    async function(city:string,{rejectWithValue}){
        try {
            const currentWeather = await api.get<AxiosResponse<CurrentWeather>>(`/weather?q=${city}`)
            const getCoords = await coordinateApi.get<AxiosResponse<any>>(`/direct?q=${city}`)
            const res = Promise.all([currentWeather,getCoords])
            return res
        } catch (error:any) {
            return rejectWithValue('Упс! Щось пішло не так(')
        }
    }
)


export const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{},
    extraReducers:{
        [getCurrentWeather.pending.type]:(state)=>{
            state.isLoading = true
        },
        [getCurrentWeather.fulfilled.type]:(state,action:PayloadAction<any>)=>{
            state.isLoading = false;
            state.weather = action.payload[0].data
            state.lat = action.payload[1].data[0].lat
            state.lon = action.payload[1].data[0].lon
            state.error=''
        },
        [getCurrentWeather.rejected.type]:(state,action:PayloadAction<string>)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default weatherSlice.reducer