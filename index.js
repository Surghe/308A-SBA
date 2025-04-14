import { fetchCharacters } from './api.js';
import { displayCharacters } from './ui.js';

async function initApp() {
    console.log('App initialized');
    const characters = await fetchCharacters();
    displayCharacters(characters);
  }
  
  initApp();