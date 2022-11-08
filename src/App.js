import "./styles.css";
import data from "./data.json";
import Carta from "./Carta";

export default function App() {
  console.log(data);

  return (
    <div className="App">
      <h1>sotto carta</h1>
      <Carta {...data} />
    </div>
  );
}
