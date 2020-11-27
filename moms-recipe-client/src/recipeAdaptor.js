class RecipeAdaptor {
    static url = "http://localhost:3000";

    static addRecipe(event) {        
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
            AppContainer.renderRecipes();
        })        
        .catch(err => console.log(err));
        alert("Recipe added succesfully")
    };

   
    static getRecipes() {
        fetch(this.url + '/recipes')
        .then(resp => resp.json())
        .then(data =>{ 
            console.log(data)
            data.forEach(recipe=> {                
                new Recipe(recipe.id, recipe.name, recipe.category, recipe.memory, recipe.directions) 
            }); 
            AppContainer.renderRecipes();           
        })
        .catch(err => alert(err));        
    };

    

    
}