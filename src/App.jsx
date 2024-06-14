import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, SideBar } from "./pages/Root";
import AuthLayout from "./pages/Auth/AuthLayout";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-navyBlue text-lightBlue min-h-[100vh] ">
      <Routes>
        {/* public  routes here */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* private routes here */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </div>
  );
};

export default App;
