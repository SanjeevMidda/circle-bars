import "./index.css";
import Bar from "./components/Bar";

function App() {
  return (
    <div className="App">
      <div className="barContainer">
        <Bar rotate="50deg" index="1" />
        <Bar rotate="90deg" index="2" />
        <Bar rotate="140deg" index="3" />
        <Bar rotate="180deg" index="4" />
      </div>
      <h1>hello.</h1>
    </div>
  );
}

export default App;
