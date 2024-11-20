let availableIngredients = ["tomatoes", "cheese", "basil", "olive oil", "garlic"];
let recipeNeeds;
let hasAllIngredients;

recipeNeeds = ["tomatoes", "cheese", "basil"]; // Example recipe requirements

// Function to check if all needed ingredients are available
function checkIngredients(needed, available) {
    return needed.every(ingredient => available.includes(ingredient));
}

hasAllIngredients = checkIngredients(recipeNeeds, availableIngredients);

if (hasAllIngredients) {
    console.log("You have all the ingredients for the recipe!");
} else {
    console.log("You are missing some ingredients for the recipe.");
}
