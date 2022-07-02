import React from "react";
import "./SortInput.css";

function SortInput() {
  return (
    <div className="sort_input">
      <select>
        <option selected="selected" value="all">
          relevance
        </option>
        <option value="art">newest</option>
      </select>
    </div>
  );
}

export default SortInput;
