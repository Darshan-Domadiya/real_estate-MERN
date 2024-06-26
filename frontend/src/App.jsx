import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import About from "./pages/about/About";
import SignIn from "./pages/signin/SignIn";
import Signup from "./pages/signup/Signup";

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
            <Route path="/signup" element=<Signup /> />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
