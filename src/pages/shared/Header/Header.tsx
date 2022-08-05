import React, { useState, useEffect } from "react";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import { useCustomDispatch } from "../../../redux/hooks/customDispath";
import { saveTheme } from "../../../utils/saveTheme";
import { getCurrentWeather } from "../../../redux/slices/currentWeatherSlice";

type Props = {};
saveTheme();

const Header = (props: Props) => {
  const [currentCountry, setCurrentCountry] = useState<string>("Kyiv");
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather(currentCountry));
  }, []);

  const handleChangeTheme = () => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");

    if (html?.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  const onEnterGetWeather = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  const getWeather = () => {
    if (!currentCountry) return null;
    dispatch(getCurrentWeather(currentCountry));
  };

  return (
    <header className="sm:px-7 md:px-5 flex items-center justify-between w-full mb-[30px]">
      <div className="flex items-center">
        <div className="md:mr-3 mr-14">
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className="sm:hidden   flex items-center text-2xl font-bold uppercase dark:text-primary">
          React Weather
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <div className="cursor-pointer flex">
            <span onClick={handleChangeTheme}>
              <GlobalSvgSelector id="change-theme" />
            </span>
            <span onClick={getWeather}>
              <GlobalSvgSelector id="search" />
            </span>
          </div>
          <input
            onKeyUp={onEnterGetWeather}
            type="text"
            onChange={(e) => {
              setCurrentCountry(e.target.value);
            }}
            value={currentCountry}
            className="w-[194px] h-[37px]  rounded-[10px] outline-primary focus: bg-[rgba(71,147,225,0.2)] px-[5px] text-lite dark:bg-[rgba(147,144,144,0.28)] dark:outline-none dark:text-[#fff]  "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
