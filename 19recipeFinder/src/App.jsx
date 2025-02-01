
import React,{useState} from 'react'

function App() {

  const [ingredient, setIngredient] = useState("")
  const [recipes, setRecipes] = useState([])
  const [error ,setError] = useState("")


  const API_KEY = "4aea490a51354e0980e63e362a9c77c7"

  // const url = `https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&number=2&sort=calories&sortDirection=desc&apiKey=${API_KEY}`;


  const findRecipe = async () => {
    if(ingredient.trim() === "" ) return;

    const url = `https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&number=2&sort=calories&sortDirection=desc&apiKey=${API_KEY}`;


    try {
      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        setRecipes(data.results); // Update state with the recipe results
        setError("");
      } else {
        setError("Failed to fetch recipes. Try again.");
        setRecipes([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setRecipes([]);
    }
    


  }

  return (
    <>
    <input
  type="text"
  value={ingredient}
  placeholder='Enter Ingredient....'
  className='bg-gray-400 p-2 border border-gray-600 rounded'
  onChange={(e) => setIngredient(e.target.value)}
/>


    <button onClick={findRecipe} className='bg-gray-400 p-3 rounded-2xl'>
      Find Recipe
    </button>

    {error}


    { recipes.length > 0 && (
      <ul>
        {recipes.map((recipe,index) => (
         <li  key = {index} >
          <p>{recipe.name}</p>
 
         </li>
        )
        )}
      </ul>
    ) }

    </>
  )
}

export default App