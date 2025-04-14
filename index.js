import { fetchCharacters } from './api.js';
import { displayCharacters } from './ui.js';

let allCharacters = [];

async function initApp() {
  console.log('App initialized');
  allCharacters = await fetchCharacters();
  displayCharacters(allCharacters);

  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', handleSearch);
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  const filtered = allCharacters.filter(char =>
    char.name.toLowerCase().includes(query)
  );
  console.log('Search results:', filtered);
  displayCharacters(filtered);
}

initApp();