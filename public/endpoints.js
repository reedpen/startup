function setJumbotronBackground() {
  // Make a request to the Foodish API's random image endpoint
  fetch("https://foodish-api.herokuapp.com/api/images/burger")
    .then(response => response.json())
    .then(data => {
      // Extract the image URL from the response data
      const imageUrl = data.image;
      
      // Set the background image for the Jumbotron section
      const jumbotronSection = document.getElementById("jumbotron-section");
      jumbotronSection.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(error => console.error(error));
}

// Example usage:
// Example usage:

function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }


  setJumbotronBackground();

  displayQuote();