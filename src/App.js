import "./App.css";
import { Waves } from "./components/Waves";
import { Dog } from "./components/Dog";
import { Me } from "./components/Me";
import { SailingBoat } from "./components/SailingBoat";

const App = () => {
  return (
    <div className="App">
      <div id="sky" className="bg-section"></div>
      <div id="lake" className="bg-section">
        <Waves />
        <SailingBoat />
      </div>
      <div id="land" className="bg-section">
        <Me />
        <Dog />
      </div>
    </div>
  );
};

export default App;
