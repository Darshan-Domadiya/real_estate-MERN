import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Layout />>
            <Route index element=<Home /> />
            <Route path="/about" element=<About /> />
            <Route path="/profile" element=<Profile /> />
            <Route path="/signin" element=<SignIn /> />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
