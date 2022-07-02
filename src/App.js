import "./App.css";
import CategoryInput from "./components/CategoryInput/CategoryInput";
import SortInput from "./components/SortInput/SortInput";
import SearchInput from "./components/SearchInput/SearchInput";
import BookOutput from "./components/BookOutput/BookOutput";

function App() {
  return (
    <div className="App">
      <h1> Search for books</h1>
      <div className="choice_input">
        <div>
          <SearchInput />
        </div>
        <div className="choice_inputs">
          <div>
            <p>Categories</p>
            <CategoryInput />
          </div>
          <div>
            <p>Sorting by</p>
            <SortInput />
          </div>
        </div>
      </div>
      <div className="books_output">
        <BookOutput />
      </div>
    </div>
  );
}

export default App;
