import React from "react";
import "./App.scss";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Homepage/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Galery from "./pages/Galery";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedCursor
          innerSize={15}
          outerSize={5}
          color="86, 240, 212"
          outerAlpha={0.8}
          innerScale={1.5}
          outerScale={0}
        />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
