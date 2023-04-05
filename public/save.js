const database = require('./database.js');

async function displaySavedRecipes() {
  const user = await database.getUser(localStorage.getItem('userName'));
  const savedRecipes = await database.getSavedRecipes(user.email);

  const recipeContainer = document.getElementById('recipe-container');
  recipeContainer.innerHTML = '';

  savedRecipes.forEach((recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('col-md-4');
    recipeCard.innerHTML = `
      <div class="card mb-4 box-shadow">
        <img class="card-img-top" src="${recipe.img}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${recipe.name}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="window.location.href = '${recipe.link}';">View</button>
            </div>
            <small class="text-muted">${recipe.time}</small>
          </div>
        </div>
      </div>
    `;
    recipeContainer.appendChild(recipeCard);
  });
}

displaySavedRecipes();
