import "./App.css";
import CategoryInput from "./components/CategoryInput/CategoryInput";

function App() {
  return (
    <div className="App">
      <h1> Search for books</h1>
      <div className="choice_input">
        <p>Categories</p>
        <CategoryInput />
        <p>Sorting by</p>
        <CategoryInput />
      </div>
    </div>
  );
}

export default App;
