class AppContainer {
    static recipes = [];
    categories = [];
    ingredients = [];
    directions = [];

    url = "http://localhost:3000";
    cookFood = {};

    bindEventListeners() {
        const btn = document.getElementById('createCookFood');    
        btn.addEventListener('click', this.getRandomRecipes)            
    };

    getRandomRecipes() {
        let randomRecipes = [];        
        for (let i = 0; i < 1; i++) {
            randomRecipes.push(AppContainer.recipes[Math.floor(Math.random()*AppContainer.recipes.length)]);
        };        
        new CookFood(randomRecipes);   
        const cookFoodDiv = document.getElementById('cookFood');
        AppContainer.cookFood.recipes.forEach(cookFood => {
            const recipeDiv = document.createElement('div');
            recipeDiv.innerText = cookFood.name;
            cookFoodDiv.appendChild(recipeDiv);
        })    
    };

    getRecipes() {
        fetch(this.url + '/recipes')
        .then(resp => resp.json())
        .then(data =>{ 
            console.log(data)
            data.forEach(recipe => {                
                new Recipe(recipe.name, recipe.category)
                console.log(AppContainer.recipes)
            }); 
            this.renderRecipes();           
        })
        .catch(err => alert(err));
        console.log(AppContainer.recipes)
    };

    renderRecipes() {
        const repi = document.getElementById('repi');
        AppContainer.recipes.forEach(recipe => {
            const option = document.createElement('option');
            option.innerText = recipe.name;
            repi.appendChild(option);
        })
        document.body.appendChild(repi);
    };
}