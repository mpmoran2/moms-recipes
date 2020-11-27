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
        
        const newIngredientsForm = document.getElementById('newIngredients');
        newIngredientsForm.addEventListener('submit', () => this.addIngredients(event));
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
        .catch(err => console.log(err));
        // alert("Recipe added succesfully")
    };

    addIngredients(event) {        
        event.preventDefault();
        let items = Array.from(document.querySelector("#newIngredients").querySelectorAll("input"));
        let e = event.target;
        let data = [];

        items.forEach(i => {
            if (i.value !== "" || i.value !== "Submit") {
                data.push(i.value)
            };            
        });        
        console.log(this)
        fetch(`${this.url}/ingredients`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                recipe_id: e.recipeSelect.value,
                data: data,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            const { id, recipe_id, name } = data;
            new Ingredient(id, recipe_id, name);
            this.renderIngredients();
        })        
        .catch(err => console.log(err));
        // alert("Ingredients added succesfully")
    };

    getRandomRecipes() {
        let randomRecipes = [];  
        // let randomIngredients = [];
        for (let i = 0; i < 1; i++) {
            randomRecipes.push(AppContainer.recipes[Math.floor(Math.random()*AppContainer.recipes.length)]);
        }; 
        new CookFood(randomRecipes);   
        const cookFoodDiv = document.getElementById('cookFood');
        cookFoodDiv.innerHTML = ""
        AppContainer.cookFood.recipes.forEach(cookFood => {
            const recipeDiv = document.createElement('div');
            const recipeH2 = document.createElement('h2');
            const memoryH5 = document.createElement('h5');
            // const itemUl = document.createElement('ul');
            // const itemLi =document.createElement('li');
            const ingredientsDiv = document.createElement('div')
            const itemH3 = document.createElement('h3');
            const directionsDiv = document.createElement('div')
            const directionsH3 = document.createElement('h3');


            recipeH2.innerText = cookFood.name;
            recipeDiv.innerText = cookFood.category.name;   
            memoryH5.innerText = cookFood.memory;

            itemH3.innerText = "Ingredients";
            //ingredients list; 

            directionsH3.innerText = "Directions";
            directionsDiv.innerText = cookFood.directions;            

           
            cookFoodDiv.appendChild(recipeH2);   
            cookFoodDiv.appendChild(recipeDiv);
            recipeDiv.appendChild(memoryH5);
            recipeDiv.appendChild(ingredientsDiv);
            ingredientsDiv.appendChild(itemH3)
            //ingredientsDiv.appendChild(list of ingredients )
            ingredientsDiv.appendChild(directionsH3);
            ingredientsDiv.appendChild(directionsDiv);

            // cookFoodDiv.innerHTML = recipeDiv;
            // recipeDiv.innerHTML = recipeH2;
            // recipeH2.innerText = cookFood.name;    
            // recipeType.innerText = cookFood.category.name;
            // memoryH6.innerText = cookFood.memory;
            // directionsDiv.innerText = cookFood.directions;
        }); 
        // new FoodItems(randomIngredients);   
        // const foodItemsDiv = document.getElementById('foodItems');
        // const foodUl = document.createElement('ul')
        // foodItemsDiv.innerHTML = ""
        // foodUl.innerHTML = ""
        // AppContainer.foodItemsDiv.ingredients.forEach(foodItems => {
        //     const ingredientH2 = document.createElement('h2');
        //     const itemLi = document.createElement('li')
            
        //     ingredientH2.innerText = "Ingredients";
        //     itemLi.innerText = foodItems.item1

        //     foodItemsDiv.innerHTML = ingredientH2;
        //     ingredientH2.appendChild(foodUl);
        //     foodUl.appendChild(itemLi);             
        // }); 
    } 
    
    // getRandomIngredients() {
    //     let randomIngredients = [];        
    //     AppContainer.ingredients.forEach(ingredient =>
    //         randomIngredients.push(Ingredient.byRecipe(ingredient.id)[Math.floor(Math.random()*Ingredient.byRecipe(ingredient.id).length)]);
    //     };
    //     new FoodItems(randomIngredients);   
    //     const foodItemsDiv = document.getElementById('foodItems');
    //     foodItemsDiv.innerHTML = "";
    //     AppContainer.foodItems.ingredients.forEach(foodItems => {
    //         const ingredientsDiv = document.createElement('div');
    //         const ingredientsUl =document.createElement('ul')
    //         const ingredientsLi= document.createElement('li');
    //         ingredientsLi.innerText= foodItems.item1
    //         ingredientsUl.appendChild(ingredientsLi)
    //         foodItemsDiv.appendChild(ingredientsDiv)
    //     });  
    // };
    
    getRecipes() {
        fetch(this.url + `/recipes`)
        .then(resp => resp.json())
        .then(data =>{ 
            console.log(data)
            data.forEach(recipe => {                
                new Recipe(recipe.id, recipe.name, recipe.category, recipe.memory, recipe.directions) 
            }); 
            this.renderRecipes();           
        })
        .catch(err => alert(err));        
    };
    getIngredients() {
        fetch(this.url+`/ingredients`) 
        .then(resp => resp.json())
        .then(data =>{ 
            console.log(data)
            data.forEach(ingredient => {              
                new Ingredient(ingredient.id, ingredient.recipe_id, ingredient.name)
            });
            this.renderIngredients();  
        });    
    }

    renderRecipes() {       
        const repi = document.getElementById('repi');
        const repiSelect = document.getElementById('recipeSelect')
        repi.innerHTML = ""
        repiSelect.innerHTML = ""
        AppContainer.recipes.forEach(recipe => {            
            const repiLi = document.createElement('li');  
            const repiOption = document.createElement('option')          
            repiLi.innerText = recipe.name;
            repiOption.innerText = recipe.id     
            repi.appendChild(repiLi);
            repiSelect.appendChild(repiOption)            
        })
    };       
    
    renderIngredients() {
        const ingri = document.createElement('ul');
        ingri.innerHTML = ""
        AppContainer.ingredients.forEach(ingredient => {
            const itemLi = document.createElement('li');
            itemLi.innerText = ingredient.name;            
            ingri.appendChild(itemLi);
        })
    };        
    
}        