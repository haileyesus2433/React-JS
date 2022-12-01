/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

const Recipe = (props) => {
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  const { handleDeleteRecipe, handleEditRecipe } = useContext(RecipeContext);
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__header--title">{name}</h3>
        <div>
          <button
            onClick={() => handleEditRecipe(id)}
            className="btn btn--primary mr-1"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteRecipe(id)}
            className="btn btn--danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__value--indented recipe__instructions">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value  recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
