function addUrlToList(url) {
    const urlList = document.querySelector('#url-list');
    const listItem = document.createElement('li');
    listItem.textContent = url;
    urlList.appendChild(listItem);
  
    const button = document.querySelector('#my-button');
    button.style.backgroundColor = 'green';
    button.textContent = 'URL added!';
  
    // Store the updated list in local storage
    const urls = JSON.parse(localStorage.getItem('urls')) || [];
    urls.push(url);
    localStorage.setItem('urls', JSON.stringify(urls));
  }
  