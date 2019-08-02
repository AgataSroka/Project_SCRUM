document.addEventListener('DOMContentLoaded',function () {
    function renderAllRecipes() {

        allRecipesContainer.innerHTML = "";

        var allRecipes = JSON.parse(localStorage.getItem("recipes"));

        console.log(localStorage.getItem('recipes'));

        var newList = document.createElement("tr");

        allRecipes.forEach(function(singleRecipe) {

            var newTd = document.createElement("td");

            newTd.innerHTML = singleRecipe.title;

            var ingredientsTr = document.createElement("tr");
            newTd.appendChild(ingredientsTr);

            singleRecipe.ingredients.forEach(function(ingredient) {

                var newRecipeTd = document.createElement("td");
                newRecipeTd.innerHTML = ingredient;
                ingredientsTr.appendChild(newRecipeTd);
            });

            newList.appendChild(newTd);
            allRecipesContainer.appendChild(newList);
        });
    }

});

