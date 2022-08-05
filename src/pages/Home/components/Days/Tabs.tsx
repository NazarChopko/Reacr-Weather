import React, { useState } from "react";

type Props = {};

interface Tab {
  value: string;
  id: number;
}

const Tabs = (props: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTab = (idx: number) => {
    setActiveTab(idx);
  };

  const tabs: Tab[] = [
    {
      value: "На тиждень",
      id: 0,
    },
    // {
    //   value: "На 10 днів",
    //   id: 1,
    // },
    // {
    //   value: "На місяць",
    //   id: 2,
    // },
  ];
  return (
    <div className="sm:px-7 md:px-4 flex justify-between mb-[5px]">
      <div className="flex">
        {tabs.map((tab: Tab) => {
          return (
            <div
              onClick={() => {
                handleTab(tab.id);
              }}
              className={`flex items-center justify-center cursor-pointer shadow-xl rounded-[5px] px-[20px] py-[9px] bg-[#fff] dark:bg-darkPrimaryLight dark:text-[#fff] mr-[15px] text-[18px] text-lite transition duration-500 ${
                activeTab === tab.id
                  ? "bg-primary text-[#fff] dark:bg-primary"
                  : ""
              }`}
              key={tab.value}
            >
              {tab.value}
            </div>
          );
        })}
      </div>
      <div className=" flex items-center justify-center shadow-xl dark:bg-darkPrimaryLight dark:text-[#fff] rounded-[5px] px-[20px] py-[9px] bg-[#fff] mr-0 text-[18px] cursor-pointer">
        Відмінити
      </div>
    </div>
  );
};

export default Tabs;
