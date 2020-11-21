class AppContainer {
    recipes = []
    categories = []
    url = "http://localhost:3000"
    getFood = []

    bindEventListeners() {
        const btn = document.getElementById('createGetFood');
        
        debugger
    };

    getRecipes() {
        console.log('beep beep Imma sheep')
        fetch(this.url + '/recipes')
        .then(resp => resp.json())
        .then(data => console.log(data))
        //call render
        .catch(err => alert(err))
    };

    renderHabits() {
        //create DOM nodes to render in DOM
    };
}