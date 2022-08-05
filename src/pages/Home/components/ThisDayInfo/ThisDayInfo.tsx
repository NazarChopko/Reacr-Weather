import React, { FC } from "react";
import cloud from "../../../../assets/images/cloud/cloud.png";
import { IState } from "../../../../redux/slices/type";
import Loader from "../../../shared/Loader/Loader";
import ThisDayItem from "./ThisDayItem";

type Props = {
  state: IState;
};
export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo: FC<Props> = ({ state: { weather, isLoading, error } }) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${weather?.main?.temp?.toFixed(
        0
      )}° - відчувається як ${weather?.main?.feels_like?.toFixed(0)}°`,
    },
    {
      icon_id: "pressure",
      name: "Тиск",
      value: `${weather?.main?.pressure} мм ртутного стовпчика`,
    },
    {
      icon_id: "precipitation",
      name: "Вологість",
      value: `${weather?.main?.humidity} % - ${
        weather?.main?.humidity < 60
          ? "опади не очікуються"
          : weather?.main?.humidity > 60 && weather?.main?.humidity < 70
          ? "можливі опади"
          : "очікуються опади - беріть парасольку!"
      }`,
    },
    {
      icon_id: "wind",
      name: "Вітер",
      value: `${weather?.wind?.speed} м/с ${
        weather?.wind?.speed > 5 ? "сильний вітер" : "легкий вітер"
      }`,
    },
  ];
  return (
    <div className="sm:mt-6 sm:w-[495px]  relative p-[40px] max-w-[750px] w-full bg-[#c0f598] dark:bg-darkPrimaryLight shadow-xl rounded-[20px] z-0  ">
      <div className="flex flex-col justify-center">
        {isLoading ? (
          <Loader size="top" />
        ) : (
          items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))
        )}
      </div>
      <img className="absolute top-0 right-0" src={cloud} alt="хмара" />
    </div>
  );
};

export default ThisDayInfo;
