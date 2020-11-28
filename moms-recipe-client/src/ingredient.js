class Ingredient {
    constructor(id, recipe, name, ){
        this.id = id;
        this.recipe_id = recipe;
        this.name = name;        
        AppContainer.ingredients.push(this);        
    }
    static byRecipe(recipeID) {
        return AppContainer.ingredients.filter(ingredient => ingredient.recipe_id === recipeID)
    }
}