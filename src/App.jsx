import React from "react";
import FetchApi from "./components/FetchApi";
import Asynchfunch from "./components/Asynchfunch";

const App = () => {
  return (
    <div className=" bg-slate-700 h-full">
      <div>
        <Asynchfunch />
        <FetchApi />
      </div>
    </div>
  );
};

export default App;
