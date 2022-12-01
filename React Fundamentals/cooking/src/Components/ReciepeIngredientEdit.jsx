/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
import React from "react";

const ReciepeIngredientEdit = ({
  ingredient,
  handleChangeIngredient,
  handleDeleteIngredient,
}) => {
  const handleChange = (changes) => {
    handleChangeIngredient(ingredient.id, { ...ingredient, ...changes });
  };
  return (
    <>
      <input
        type="text"
        className="recipe-edit__input"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        type="text"
        className="recipe-edit__input"
        onChange={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleDeleteIngredient(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
};

export default ReciepeIngredientEdit;
