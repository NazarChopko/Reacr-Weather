import React from "react";

import { Item } from "../../Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../Home/components/ThisDayInfo/ThisDayItem";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";

import { format, fromUnixTime } from "date-fns";
import { uk } from "date-fns/locale";

import { svgRender } from "../../../utils/svgRender";

import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { useCustomDispatch } from "../../../redux/hooks/customDispath";
import { closeDetails } from "../../../redux/slices/cardSlice";

type Props = {};

const Popup = (props: Props) => {
  const { isOpen, weather } = useTypedSelector((state) => state.cardInfo);
  const dispatch = useCustomDispatch();

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${weather?.temp?.day?.toFixed(
        0
      )}° - відчувається як ${weather?.feels_like?.day?.toFixed(0)}°`,
    },
    {
      icon_id: "pressure",
      name: "Тиск",
      value: `${weather?.pressure} мм ртутного стовпчика`,
    },
    {
      icon_id: "precipitation",
      name: "Вологість",
      value: `${weather?.humidity} % - ${
        weather?.humidity < 60
          ? "опади не очікуються"
          : weather?.humidity > 60 && weather?.humidity < 70
          ? "можливі опади"
          : "очікуються опади - беріть парасольку!"
      }`,
    },
    {
      icon_id: "wind",
      name: "Вітер",
      value: `${weather?.wind_speed?.toFixed(1)} м/с ${
        weather?.wind_speed > 5 ? "сильний вітер" : "легкий вітер"
      }`,
    },
  ];
  return (
    <>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } sm:h-full md:h-full animate-popupAppear  absolute z-40 w-screen h-screen bg-[rgba(0,0,0,0.25)]`}
      ></div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        }  sm:flex-col  sm:w-[450px] sm:left-[calc(50%-225px)]   sm:animate-smallPopup md:w-[650px] md:left-[calc(50%-325px)]   dark:bg-darkPrimaryDark absolute animate-popup left-[calc(50%-375px)] z-50 flex items-center justify-around p-[40px] max-w-[750px] w-full bg-[#c0f598] shadow-xl rounded-[20px]`}
      >
        <div className=" sm:pb-5 sm:items-center flex flex-col space-y-2">
          <div className="sm:pl-6  text-[60px] text-primary font-medium">
            {weather?.temp?.day?.toFixed(0)}°
          </div>
          <div className="dark:text-[#fff] text-lite text-[25px]">
            {weather?.dt &&
              format(new Date(fromUnixTime(weather?.dt)), "EEEE", {
                locale: uk,
              }).toUpperCase()}
          </div>
          <div className="">{svgRender(weather.humidity)}</div>

          <div className="text-basic text-[15px]">
            Місто: <span>Kyiv</span>
          </div>
        </div>
        <div className=" flex flex-col justify-center ">
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div
          onClick={() => {
            dispatch(closeDetails());
          }}
          className="absolute top-[20px] right-[20px] cursor-pointer transition duration-300 hover:rotate-360"
        >
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
