import React from "react";
import Suggestion from "../Suggestion/Suggestion";
import PostList from "../Post/PostList";
import Hom from "../Demo/Demo";
import Header from "./Header";

const Home = () => {
  return (
    <div className="h-[100vh]  overflow-y-scroll w-[100%] md:w-[100%] md:ml-48 ml-16  bg-slate-950  pt-4 pr-6 pl-10">
      <Header />
      <Hom />
    </div>
  );
};

export default Home;
