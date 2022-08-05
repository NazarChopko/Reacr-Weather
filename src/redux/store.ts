import { configureStore,combineReducers } from "@reduxjs/toolkit";
import currentWeather  from "./slices/currentWeatherSlice";
import cardInfo from './slices/cardSlice'



const rootReducer = combineReducers({
    currentWeather,
    cardInfo
    
})

export const store = configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType< typeof rootReducer>
export type AppDispatch = typeof store.dispatch