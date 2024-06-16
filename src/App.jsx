import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthLayout, SignIn, SignUp } from "./pages/Auth";
import RootLayout from "./pages/Root/RootLayout";
import Error from "./pages/Error/Error";

import { Create, Home, Notifications, Profile, Search } from "./pages/Root";

const App = () => {
  //const isAuth = true;

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="bg-black text-gray-100 min-h-[100vh] ">
      <Routes>
        {/* public  routes here */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* private routes here */}
        <Route path="/root" element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="notification" element={<Notifications />} />
          <Route path="create" element={<Create />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
