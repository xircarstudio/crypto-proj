import React from "react";
import Theme from "/src/components/common/Theme";

const NavPopup = () => {
  const cardData = [
    { title: "Link One", description: "Description for link one" },
    { title: "Link Two", description: "Description for link two" },
    { title: "Link Three", description: "Description for link three" },
  ];

  return (
    <div className="p-4 bg-white dark:bg-body-grey rounded-t-xl shadow-md">
      <div className="flex  gap-2 flex-col sm:justify-around ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center bg-white dark:bg-body p-4 rounded-lg shadow
             hover:shadow-lg transition-all duration-300 w-full  border
              border-gray-200 dark:border-gray-700 dark:hover:border-primary hover:border-primary"
          >
            <div className="text-md font-semibold text-gray-700 dark:text-grey hover:text-black dark:hover:text-white">
              {card.title}
            </div>
            <div className="text-sm text-gray-700 dark:text-grey hover:text-black dark:hover:text-white">
              {card.description}
            </div>
          </div>
        ))}

        <div
          className="flex flex-row justify-between items-center bg-white dark:bg-body p-4 rounded-lg shadow hover:shadow-lg 
        transition-all duration-300 w-full border border-gray-200 dark:border-gray-700 dark:hover:border-primary hover:border-primary"
        >
          <div className="text-gray-700 dark:text-grey hover:text-black dark:hover:text-white">
            Dark Theme
          </div>
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default NavPopup;
