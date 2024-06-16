import React from "react";
import "./style.css";

const Header = () => {
  const sections = [
    "trending",
    "funny",
    "comedy",
    "education",
    "spiritual",
    "songs",
    "movies",
    "drama",
    "science",
    "finance",
    "defence",
  ];

  const handleButtonClick = (item) => {
    alert(item);
  };

  return (
    <div className="h-[10vh]  w-full bg-slate-950  sticky top-0 overflow-x-scroll  flex justify-center items-center ">
      <div className="flex overflow-x-scroll example gap-2  ">
        {sections.map((item, index) => {
          return (
            <div
              onClick={() => {
                handleButtonClick(item);
              }}
              key={index}
              className="py-2 cursor-pointer  rounded-md bg-slate-900 px-2"
            >
              {" "}
              {item}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
