import React from "react";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import { Item } from "./ThisDayInfo";

type Props = {
  item: Item;
};

const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className="flex items-center relative mb-[25px] last-of-type:mb-0 z-30">
      <div className="mr-[20px] min-w-[38px] h-[38px] flex items-center justify-center  bg-[#fff] shadow-xl rounded-full ">
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className="sm:flex">
        <div className="mr-[20px] text-[14px]  text-basic ">{name}</div>
        <div className="text-[14px] text-lite dark:text-[#fff]">{value}</div>
      </div>
    </div>
  );
};

export default ThisDayItem;
