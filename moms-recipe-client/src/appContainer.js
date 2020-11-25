class AppContainer {
    static recipes = [];
    static categories = [];
    static ingredients = [];
    url = "http://localhost:3000";
    static cookFood = {};

    bindEventListeners() {
        const btn = document.getElementById('createCookFood');    
        btn.addEventListener('click', this.getRandomRecipes)
        
        const newRecipeForm = document.getElementById('newRecipe');
        newRecipeForm.addEventListener('submit', () => this.addRecipe(event));
    };

    addRecipe(event) {        
        event.preventDefault();
        const data = event.target;
        console.log(this)
        fetch(`${this.url}/recipes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.recipeInput.value,
                category: data.categorySelect.value,
                memory: data.memoryInput.value,
                directions: data.directionInput.value,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            const { id, name, category, directions, memory } = data;
            new Recipe(id, name, category, directions, memory);
            this.renderRecipes();
        })        
        .catch(err => console.log(err))
    }

    getRandomRecipes() {
        let randomRecipes = [];        
        for (let i = 0; i < 1; i++) {
            randomRecipes.push(AppContainer.recipes[Math.floor(Math.random()*AppContainer.recipes.length)]);
        }; 
        new CookFood(randomRecipes);   
        const cookFoodDiv = document.getElementById('cookFood');
        cookFoodDiv.innerHTML = ""
        AppContainer.cookFood.recipes.forEach(cookFood => {
            const recipeDiv = document.createElement('div');
            const recipeH2 = document.createElement('h2');
            recipeH2.innerText = cookFood.name;
            recipeDiv.innerText = cookFood.category.name;              
            recipeDiv.appendChild(recipeH2); 
            cookFoodDiv.appendChild(recipeH2);   
            cookFoodDiv.appendChild(recipeDiv);
        });  
        // randomRecipes.forEach(recipe => {  
        //     fetch(`http://localhost:3000/recipes/${recipes].id}`, {
        //         method: 'DELETE'
        //     })
        //     .then(resp => resp.json)
        //     .then(data => {
        //          console.log(data);
        //          Recipe.delete(data.id)
        //          this.renderRecipes();
        //      })
        //      .catch(err => console.log(err))
        // })
    };
    
    getRecipes() {
        fetch(this.url + '/recipes')
        .then(resp => resp.json())
        .then(data =>{ 
            console.log(data)
            data.forEach(recipe=> {                
                new Recipe(recipe.id, recipe.name, recipe.category, recipe.memory, recipe.directions) 
            }); 
            this.renderRecipes();           
        })
        .catch(err => alert(err));        
    };

    renderRecipes() {       
        const repi = document.getElementById('repi');
        repi.innerHTML = ""
        AppContainer.recipes.forEach(recipe => {            
            const repiLi = document.createElement('li');            
            repiLi.innerText = recipe.name;            
            repi.appendChild(repiLi);
            // repiLi.innerHTML = "";
        })
    };   
    
    getIngredients() {
        fetch(this.url + '/recipes/:recipe_id/ingredients') 
        .then(resp => resp.json())
        .then(data =>{ 
            console.log(data)
            data.forEach(ingredient=> {                
                new Ingredient(ingredient.id, ingredient.name, ingredient.amount, ingredient.recipe_id)
            });
            // this.renderIngredients();  
        });        
    }
    
    // renderIngredients() {
        //     const ingri = document.createElement('ul');
        //     AppContainer.ingredients.forEach(ingredient => {
            //         const itemLi = document.createElement('li');
            //         itemLi.innerText = ingredient.amount + " " + ingredient.name;            
            //         ingri.appendChild(repiLi);
            //     })
            // };

            
            
}
        
    
        