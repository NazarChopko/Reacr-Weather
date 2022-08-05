import React, { useEffect } from "react";

import Days from "./Days/Days";
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";

import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
type Props = {};

const Home = (props: Props) => {
  const state = useTypedSelector((state) => state.currentWeather);

  return (
    <div className="dark:bg-lite sm:pb-8">
      <div className="sm:flex-wrap sm:items-center md:mx-4  flex justify-center space-x-4 mb-[50px]">
        <ThisDay state={state} />
        <ThisDayInfo state={state} />
      </div>
      <Days />
    </div>
  );
};

export default Home;
