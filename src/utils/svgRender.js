import { GlobalSvgSelector } from "../assets/icons/global/GlobalSvgSelector";

export const svgRender = (humidity) => {
  if (humidity < 40) {
    return <GlobalSvgSelector id="sun" isTab={true} />;
  } else if (humidity > 40 && humidity < 70) {
    return <GlobalSvgSelector id="small_rain_sun" isTab={true} />;
  } else {
    return <GlobalSvgSelector id="rain" isTab={true} />;
  }
};
