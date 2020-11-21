class Recipe {
    constructor(name){
        this.name = name;
        AppContainer.recipies.push(this);
    }
}