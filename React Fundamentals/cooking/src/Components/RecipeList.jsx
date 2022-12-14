/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

const RecipeList = ({ recipes, handleSearch }) => {
  const { handleAddRecipe } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      <div className="recipe-list__add-btn-container">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
          className="recipe-list__search"
        />
        <button className="btn btn--primary" onClick={handleAddRecipe}>
          Add Recipe
        </button>
      </div>
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
