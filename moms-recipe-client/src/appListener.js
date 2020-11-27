class AppListener {
    
    createFoodListener() {
        const btn = document.getElementById('createCookFood');    
        btn.addEventListener('click', AppContainer.getRandomRecipes)
    }   
    
    createRecipeListener() {
        const newRecipeForm = document.getElementById('newRecipe');
        newRecipeForm.addEventListener('submit', () => RecipeAdaptor.addRecipe(event));
    }
    
    createIngredientListener() {
        const newIngredientsForm = document.getElementById('newIngredients');
        newIngredientsForm.addEventListener('submit', () => IngredientAdaptor.addIngredients(event));
    }
}; 