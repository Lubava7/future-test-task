import React from "react";
import "./SearchInput.css";

function SearchInput() {
  const [search, setSearch] = React.useState("");
  const searchBook = (event) => {
    if (event.key === "Enter") {
      console.log(event);
    }
  };
  return (
    <div className="search_input">
      <input
        type="text"
        placeholder="введите книгу"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={searchBook}
      ></input>
    </div>
  );
}

export default SearchInput;
