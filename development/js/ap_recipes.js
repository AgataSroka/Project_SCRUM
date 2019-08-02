document.addEventListener('DOMContentLoaded',function () {
    function renderAllRecipes() {

        allRecipesContainer.innerHTML = "";

        var allRecipes = JSON.parse(localStorage.getItem("recipes"));

        var newList = document.createElement("tr");

        allRecipes.forEach(function(singleRecipe) {

            var newLi = document.createElement("td");

            newLi.innerHTML = singleRecipe.title;

            var ingredientsUl = document.createElement("tr");
            newLi.appendChild(ingredientsUl);

            singleRecipe.ingredients.forEach(function(ingredient) {

                var newRecipeLi = document.createElement("td");
                newRecipeLi.innerHTML = ingredient;
                ingredientsUl.appendChild(newRecipeLi);
            });

            newList.appendChild(newLi);
            allRecipesContainer.appendChild(newList);
        });
    }
});