class AppContainer {
    static recipes = []
    categories = []
    url = "http://localhost:3000"
    getFood = []

    bindEventListeners() {
        const btn = document.getElementById('createGetFood');    
        btn.addEventListener('click', this.getRandomRecipies)            
    };

    getRandomRecipes() {
        debugger
        let randomRecipes = [];
        for (let i = 0; i < 2; i++) {
            randomRecipes.push(AppContainer.recipes[Math.floor(Math.random()*AppContainer.recipes.length)]);
        };
        return randomRecipes;
    };

    getRecipes() {
        console.log('beep beep Imma sheep')
        fetch(this.url + '/recipes')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(recipe => {
                new Recipe(recipe.name)
            })
            
        })
        //call render
        .catch(err => alert(err))
    };

    renderHabits() {
        //create DOM nodes to render in DOM
    };
}