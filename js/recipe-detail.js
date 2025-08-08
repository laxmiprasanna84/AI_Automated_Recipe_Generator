// const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));

// if (!recipe) {
//     document.body.innerHTML = "<p>No recipe found. Please go back and search again.</p>";
// } else {
//     document.getElementById("recipe-title").textContent = recipe.title || recipe.name;
//     // document.getElementById("recipe-img").src = recipe.image || "default.jpg";

//     const ingredientsList = document.getElementById("ingredients-list");
//     const stepsList = document.getElementById("steps-list");

//     // Load ingredients
//     if (Array.isArray(recipe.ingredients)) {
//         ingredientsList.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
//     } else {
//         ingredientsList.innerHTML = "<li>No ingredients listed.</li>";
//     }

//     // Load steps
//     if (Array.isArray(recipe.steps)) {
//         stepsList.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');
//     } else {
//         stepsList.innerHTML = "<li>No steps available.</li>";
//     }
// }
