import React from "react";
import UserList from "./UserList";
import "./style.css";

const Suggestion = () => {
  return (
    <div className="bg-black hidden border-l-2 border-blue-800 w-[40%] sm:flex justify-center">
      <div className="flex flex-col items-center w-[100%]  bg-inherit relative  ">
        {/* <div className="text-xl  mt-3 w-[100%]  bg-black   text-center  font-mono font-semibold">
          Top Creators
        </div> */}
        <span className="w-[100%] sticky top-0 h-[10vh] py-4 text-center bg-inherit">
          TOP CREATORS
        </span>
        <div className=" h-[90vh] overflow-y-scroll ">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
