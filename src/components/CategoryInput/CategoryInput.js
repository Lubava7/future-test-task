import React from "react";
import "./Category.css";

function CategoryInput() {
  return (
    <div className="category_input">
      <select>
        <option selected="selected" value="all">
          all
        </option>
        <option value="art">art</option>
        <option value="biography">biography</option>
        <option value="computers">computers</option>
        <option value="history">history</option>
        <option value="medical">medical</option>
        <option value="poetry">poetry</option>
      </select>
    </div>
  );
}

export default CategoryInput;
