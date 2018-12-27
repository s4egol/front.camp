import html from '../startPage/index.html';
import json from '../startPage/fileForLoaderWithText.json';

function showNewsPage(){
    import('../index.js');
}

function initApp(){
    const sourceContainer = document.getElementById('source-container');
    sourceContainer.innerHTML = html;

    const redirectToNewButton = document.getElementById('show-all-news');
    redirectToNewButton.textContent = json.value;
    redirectToNewButton.addEventListener('click', showNewsPage)
}

document.addEventListener('DOMContentLoaded', initApp);