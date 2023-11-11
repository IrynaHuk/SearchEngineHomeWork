import "./styles.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchEngine temperature={19} />
      <h2></h2>
    </div>
  );
}
