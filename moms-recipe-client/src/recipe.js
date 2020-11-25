class Recipe {
    constructor(id, name, category,  memory, directions){        
        this.name = name;
        this.category = category;
        this.id = id;
        this.memory = memory;
        this.directions = directions;
        AppContainer.recipes.push(this);
    }
    
    // get Category return category name through category_id

    // getIngredients return ingredients name through ingredient_id
    
    // static delete(recipeId) {
    //     AppContainer.recipes = AppContainer.recipes.filter(recipe => parseInt(recipeId) !== recipe.id);
    // }
}