export function displayCharacters(characters) {
    const container = document.getElementById('character-list');
    container.innerHTML = '';
    
    characters.forEach(character => {
        const charElement = document.createElement('div');
        charElement.innerHTML = `
          <h3>${character.name}</h3>
          <img src="${character.image}" alt="${character.name}" width="150"/>
        `;
        container.appendChild(charElement);
      });
    }