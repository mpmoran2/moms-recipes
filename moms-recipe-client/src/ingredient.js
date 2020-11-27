class Ingredient {
    constructor(id, recipe, name, ){
        this.id = id;
        this.recipe = recipe;
        this.name = name;
        
        AppContainer.ingredients.push(this);        
    }
    static byRecipe(recipeName) {
        return AppContainer.ingredients.filter(ingredient => ingredient.recipe.name === recipeName)
    }
}