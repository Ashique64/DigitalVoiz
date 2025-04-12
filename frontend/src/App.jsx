import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
    return (
        <>
            <AnimatedCursor innerSize={8} outerSize={35} color="0, 255, 0" outerAlpha={0.2} innerScale={1} outerScale={2} />
            <Home />
        </>
    );
};

export default App;
