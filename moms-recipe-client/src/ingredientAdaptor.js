class IngredientAdaptor {
    static url = `http://localhost:3000`;

    static addIngredients(event) {        
        event.preventDefault();
        const data = event.target;
        console.log(this)
        fetch(`${this.url}/ingredients`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                recipe_id: data.recipeSelect.value,
                item1: data.ingredientInput1.value, 
                item2: data.ingredientInput1.value, 
                item3: data.ingredientInput1.value,  
                item4: data.ingredientInput1.value,  
                item5: data.ingredientInput1.value,  
                item6: data.ingredientInput1.value,  
                item7: data.ingredientInput1.value,  
                item8: data.ingredientInput1.value,  
                item9: data.ingredientInput1.value,  
                item10: data.ingredientInput1.value,  
                item11: data.ingredientInput1.value,  
                item12: data.ingredientInput1.value, 
            })
        })
        .then(resp => resp.json())
        .then(data => {
            debugger
            const { id, recipe_id, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12 } = data;
            new Ingredient(id, recipe_id, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12);
            AppContainer.renderIngredients();
        })        
        .catch(err => console.log(err));
        alert("Ingredients added succesfully")
    };

    static getIngredients() {
        fetch(this.url + `/ingredients`) 
        .then(resp => resp.json())
        .then(data => { 
            console.log(data)
            data.forEach(ingredient=> {                
                new Ingredient(ingredient.id, ingredient.recipe_id, ingredient.item1, ingredient.item2, ingredient.item3, ingredient.item4, ingredient.item5, ingredient.item6, ingredient.item7, ingredient.item8, ingredient.item9, ingredient.item10, ingredient.item11, ingredient.item12)
                if (!AppContainer.recipes.map(recipe.id).includes(ingredient.recipe_id)) {
                    new Recipe(ingredient.recipe_id)
                }
            });
            AppContainer.renderIngredients();  
        });    
    }
}


