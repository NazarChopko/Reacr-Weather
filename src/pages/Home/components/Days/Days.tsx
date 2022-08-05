import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTypedSelector } from "../../../../redux/hooks/useTypedSelector";
import Card from "./Card";
import Tabs from "./Tabs";
import { Daily, Forecast } from "../../../../redux/slices/type";
import Loader from "../../../shared/Loader/Loader";

type Props = {};

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = (props: Props) => {
  const { lat, lon } = useTypedSelector((state) => state.currentWeather);
  const [forecast, setForecast] = useState<Daily[] | null>(null);

  useEffect(() => {
    if (lat && lon) {
      getForecastForWeek();
    }
  }, [lat, lon]);

  const getForecastForWeek = async () => {
    const { data } = await axios.get<Forecast>(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&lang=ua&appid=${process.env.REACT_APP_API_KEY}`
    );
    setForecast(data.daily.slice(1));
  };

  return (
    <>
      <Tabs />
      <div className=" sm:mx-7  md:mx-4  flex flex-wrap justify-center p-[20px]  bg-[#fff] dark:bg-darkPrimaryLight shadow-xl rounded-[20px] rounded-t-none">
        {forecast ? (
          forecast.map((day: Daily, i: number) => (
            <Card day={day} key={day.dt} index={i} />
          ))
        ) : (
          <Loader size="bottom" />
        )}
      </div>
    </>
  );
};

export default Days;
