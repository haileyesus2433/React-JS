/* eslint-disable import/no-cycle */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import ReciepeIngredientEdit from "./ReciepeIngredientEdit";
import { RecipeContext } from "./App";

const RecipeEdit = ({ recipe }) => {
  const { handleChangeRecipe, handleEditRecipe } = useContext(RecipeContext);

  const handleChange = (changes) => {
    handleChangeRecipe(recipe.id, { ...recipe, ...changes });
  };
  const handleChangeIngredient = (id, ingredient) => {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    const newIngredient = {
      id: new Date().toISOString(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  };
  const handleDeleteIngredient = (id) => {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  };
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => handleEditRecipe(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
          onChange={(e) => handleChange({ name: e.target.value })}
          value={recipe.name}
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          cookTime
        </label>
        <input
          type="text"
          name="Cook Time"
          id="cookTime"
          onChange={(e) => handleChange({ cookTime: e.target.value })}
          value={recipe.cookTime}
          className="recipe-edit__input"
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          onChange={(e) => handleChange({ servings: +e.target.value || "" })}
          value={recipe.servings}
          className="recipe-edit__input"
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
          onChange={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div />
        {recipe.ingredients.map((ingredient) => (
          <ReciepeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleDeleteIngredient={handleDeleteIngredient}
            handleChangeIngredient={handleChangeIngredient}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => handleAddIngredient()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
};

export default RecipeEdit;
