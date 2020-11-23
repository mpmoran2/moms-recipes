class Recipe {
    constructor(id, name, category){
        this.id = id;
        this.name = name;
        this.category = category;
        // this.memory = memory;
        // this.ingredient = ingredient;
        // this.direction = direction;
        AppContainer.recipes.push(this);
    }
}