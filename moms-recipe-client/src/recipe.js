class Recipe {
    constructor(id, name, category,  memory, directions){        
        this.name = name;
        this.category = category;
        this.id = id;
        this.memory = memory;
        this.directions = directions;
        AppContainer.recipes.push(this);
    }
    
    static byName(recipeName) {
        return AppContainer.recipes.filter(recipe => recipe.name === recipeName)
    }
}