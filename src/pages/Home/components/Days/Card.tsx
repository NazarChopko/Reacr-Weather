import React, { FC } from "react";

import { format, fromUnixTime } from "date-fns";
import { uk } from "date-fns/locale";

import { svgRender } from "../../../../utils/svgRender";

import { Daily } from "../../../../redux/slices/type";

import { useCustomDispatch } from "../../../../redux/hooks/customDispath";
import { openDetails } from "../../../../redux/slices/cardSlice";

type Props = {
  day: Daily;
  index: number;
};

const Card: FC<Props> = ({ day, index }) => {
  const dispatch = useCustomDispatch();

  const openPopup = () => {
    dispatch(openDetails(day));
  };

  const { dt, temp, weather, humidity } = day;
  return (
    <div
      onClick={openPopup}
      className="flex flex-col bg-[rgb(71,147,255,0.2)] dark:bg-darkPrimaryDark rounded-[10px] p-[10px] w-[149px] transition duration-300 hover:shadow-2xl cursor-pointer ml-2 mt-2 "
    >
      <div className="mb-[7px] text-[18px] dark:text-[#fff]">
        {index === 0
          ? "Завтра"
          : format(new Date(fromUnixTime(dt)), "EEEEEE", {
              locale: uk,
            }).toLocaleUpperCase()}
      </div>
      <div className="text-[14px] mb-[12px] text-basic">
        {format(new Date(fromUnixTime(dt)), "d")}
      </div>
      <div className="mb-[12px]">{svgRender(humidity)}</div>
      <div className="text-[18px] dark:text-[#fff]">{temp.day.toFixed(0)}</div>
      <div className="text-[13px] text-basic mb-[6px]">
        {temp.night.toFixed(0)}
      </div>
      <div className="text-[13px] text-basic ">{weather[0].description}</div>
    </div>
  );
};

export default Card;
