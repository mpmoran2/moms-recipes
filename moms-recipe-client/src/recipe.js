class Recipe {
    constructor(name, category){
        this.name = name;
        // this.memory = memory;
        this.category = category;
        // this.ingredient = ingredient;
        // this.direction = direction;
        AppContainer.recipes.push(this);
    }
}