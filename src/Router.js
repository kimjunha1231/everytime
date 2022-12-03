import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/ProfileIndex";
import NickName from "./components/profile/NickName";
import MainPage from "./components/mainpage/MainIndex";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile/>} exact/>
        <Route path="/profile/NickNameChange" element={<NickName/>} exact/>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;