/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../Css/app.css";

export const RecipeContext = React.createContext();

const DUMMY_RECIPES = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: "3",
    instructions:
      "1. Put Salt on Chicken\n2. Put Chicken In Oven \n3. Eat The Chicken",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "2 Pounds",
      },
    ],
  },
  {
    id: 2,
    name: "Mahberawi",
    cookTime: "2:45",
    servings: "4",
    instructions: "1. Pay Good Money\n2. Enjoy \n3. Eat The Mahberawi",
    ingredients: [
      {
        id: 2,
        name: "Meat",
        amount: "2 kilo",
      },
    ],
  },
];

const App = () => {
  const [recipes, setRecipes] = useState(DUMMY_RECIPES);
  const [selectedRecipeId, setSelectedRecipeId] = useState();

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJSON = localStorage.getItem("cookingRecipes");

    if (recipeJSON != null) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cookingRecipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleAddRecipe = () => {
    const newRecipe = {
      id: new Date().toISOString(),
      name: "",
      cookTime: "",
      servings: "",
      instructions: "",
      ingredients: [
        {
          id: new Date().toISOString(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes((prevRecipe) => [...prevRecipe, newRecipe]);
  };

  const handleDeleteRecipe = (id) => {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes((prevRecipes) =>
      prevRecipes.filter((prevRecipe) => prevRecipe.id !== id)
    );
  };

  const handleEditRecipe = (id) => {
    setSelectedRecipeId(id);
  };

  const handleChangeRecipe = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  };
  const handleSearch = (query) => {
    if (query) {
      setRecipes(recipes.filter((recipe) => recipe.name.includes(query)));
    }
  };
  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe,
    handleEditRecipe,
    handleChangeRecipe,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} handleSearch={handleSearch} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
};

export default App;
