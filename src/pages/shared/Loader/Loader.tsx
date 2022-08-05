import React, { FC } from "react";

type Props = {
  size: "top" | "bottom";
};

const Loader: FC<Props> = ({ size }) => {
  return (
    <div
      className={`${
        size === "top"
          ? "left-[calc(50%-70px)]"
          : "left-[calc(50%-60px)] md:left-[calc(50%-320px)] sm:left-[calc(50%-200px)]"
      } inline-block relative w-[80px] h-[80px] top-[calc(50%-40px)] z-10 `}
    >
      <div className=" animate-ldsEllipsis1 absolute top-[33px]  w-[35px] h-[35px] rounded-[50%] bg-[#fff] left-[-16px] bg-primary"></div>
      <div className=" animate-ldsEllipsis2  absolute top-[33px]  w-[35px] h-[35px] rounded-[50%] bg-[#fff] left-[8px] bg-primary"></div>
      <div className=" animate-ldsEllipsis2  absolute top-[33px]  w-[35px] h-[35px] rounded-[50%] bg-[#fff] left-[56px] bg-primary"></div>
      <div className=" animate-ldsEllipsis3  absolute top-[33px]  w-[35px] h-[35px] rounded-[50%] bg-[#fff] left-[107px] bg-primary"></div>
    </div>
  );
};

export default Loader;
