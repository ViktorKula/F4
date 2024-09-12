import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = ({ match }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        if (!match || !match.params || !match.params.pk) {
          console.error('Error: Match or match.params.pk is undefined.');
          return;
        }

        const response = await axios.get(`/api/categories/${match.params.pk}/`);
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [match]);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map(recipe => (
        <a key={recipe.id} href={`/recipes/${recipe.id}/`}>
          {recipe.title}
        </a>
      ))}
    </div>
  );
};

export default RecipeList;
