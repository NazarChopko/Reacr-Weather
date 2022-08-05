import React, { FC } from "react";
import { format } from "date-fns";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { IState, CurrentWeather } from "../../../../redux/slices/type";
import Loader from "../../../shared/Loader/Loader";

type Props = {
  state: IState;
};

const svgRender = (description: CurrentWeather) => {
  const { humidity } = description?.main;
  if (humidity < 60) {
    return <GlobalSvgSelector id="sun" isTab={false} />;
  } else if (humidity > 60 && humidity < 70) {
    return <GlobalSvgSelector id="small_rain_sun" isTab={false} />;
  } else {
    return <GlobalSvgSelector id="rain" isTab={false} />;
  }
};

const ThisDay: FC<Props> = ({ state: { weather, isLoading, error } }) => {
  return (
    <div className="p-[20px] max-w-[400px] w-[100%] bg-[#d8d856] dark:bg-darkPrimaryLight shadow-xl rounded-[20px]">
      {isLoading ? (
        <Loader size="top" />
      ) : (
        <>
          <div className="flex justify-between items-center w-full mb-[30px]">
            <div>
              <div className="text-[90px] font-bold text-primary">
                {`${weather?.main?.temp?.toFixed(0)}°`}
              </div>
              <div className="text-[40px] text-lite dark:text-[#fff]">
                Сьогодні
              </div>
            </div>
            {weather.main && svgRender(weather)}
          </div>
          <div>
            <div className="text-basic text-[25px]">
              Час : <span>{format(new Date(), "kk:mm")}</span>
            </div>
            <div className="text-basic text-[25px]">
              Місто : <span>{weather?.name}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThisDay;
