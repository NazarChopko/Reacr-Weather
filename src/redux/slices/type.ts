export interface IState {
    weather:CurrentWeather,
    isLoading:boolean,
    error:string
    lat:number
    lon:number
}

export interface ICardState {
    weather:Daily
    isOpen:boolean
}

export interface CurrentWeather {
name:string
main:Main
dt:number
weather:Weather[]
wind:Wind
}


interface Main {
feels_like: number
humidity: number
pressure: number
temp: number
temp_min:number 
temp_max: number
}

interface Weather {
    main:string
    description:string
}

interface Wind {
    speed:number
    deg:number
}


export interface Forecast {
    current:any
    daily:Daily[]
    lat:number
    lon:number
    timezone:string
    timezone_offset:number
}


export interface Daily{
    dt:number
    temp:Temp
    humidity:number
    weather:Description[]
    feels_like:feelLike
    pressure:number
    wind_speed:number
}

interface Temp{
    min:number
    max:number
    day:number
    night:number
    eve:number
    morn:number
}

interface Description{
    main:string
    description:string
    id:number
}

interface feelLike {
    day:number
    night:number
    eve:number
    morn:number
}