import { hubSpotLogo, background } from "./utils/utils";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Welcome to HubSpot challenge</h2>
        <img src={hubSpotLogo} alt="Main Icon" />

        <img src={background} alt="Main Icon" />

      </header>
    </div>
  );
}

export default App;
