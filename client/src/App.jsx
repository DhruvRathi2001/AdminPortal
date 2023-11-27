import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Humne components ko "DEFAULT EXPORT" nhi kiya hai , so import curly braces mai karna padega....(imp)
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        {/*<BrowserRouter> and <Routes> k bech mai jo bhi component hai woh har route k upar aa jaaega */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

//TO start -- npm run dev
