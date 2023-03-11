// Get references to the textboxes
const nameInput = document.querySelector('#recipe-name');
const ingredientsInput = document.querySelector('#recipe-ingredients');
const instructionsInput = document.querySelector('#recipe-instructions');

// Load saved data from local storage
const savedName = localStorage.getItem('recipeName');
const savedIngredients = localStorage.getItem('recipeIngredients');
const savedInstructions = localStorage.getItem('recipeInstructions');


// Add event listeners to the textboxes
nameInput.addEventListener('input', saveInput);
ingredientsInput.addEventListener('input', saveInput);
instructionsInput.addEventListener('input', saveInput);


// Save the input to local storage
function saveInput() {
  localStorage.setItem('recipeName', nameInput.value);
  localStorage.setItem('recipeIngredients', ingredientsInput.value);
  localStorage.setItem('recipeSteps', instructionsInput.value);
}

function loadSavedData() {
  saveInput();
  // Load saved data from local storage
  var savedTitle = localStorage.getItem('recipeName');
  var savedIngredients = localStorage.getItem('recipeIngredients');
  var savedSteps = localStorage.getItem('recipeSteps');

  // Set saved data as default values for textboxes
  document.getElementById('recipe-title').value = savedTitle || '';
  document.getElementById('ingredients').value = savedIngredients || '';
  document.getElementById('steps').value = savedSteps || '';
}
