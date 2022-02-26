import React from "react";
import Mobil from "./components/Mobil";
import Web from "./components/Web";

const App = () => {
  return (
    <div>
      <div className="web-div">
        <Web />
      </div>
      <div className="mobil-div">
        <Mobil />
      </div>
    </div>
  );
};

export default App;
