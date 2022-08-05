import React, { FC } from "react";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";

type Props = {
  message: string;
};

const Error: FC<Props> = ({ message }) => {
  return (
    <div>
      <div className="pt-10">
        <GlobalSvgSelector id="error" />
      </div>
      <div>
        <p className="text-center text-lite text-[30px] dark:text-[#fff]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Error;
