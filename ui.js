export function displayCharacters(characters) {
    const container = document.getElementById('character-list');
    container.innerHTML = '';
  
    if (characters.length === 0) {
      container.innerHTML = '<p>No characters found.</p>';
      return;
    }
  
    characters.forEach(character => {
      const charElement = document.createElement('div');
      charElement.innerHTML = `
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}" width="150"/>
        <p><strong>Race:</strong> ${character.race || 'Unknown'}</p>
        <p><strong>Gender:</strong> ${character.gender || 'Unknown'}</p>
        <p><strong>Ki:</strong> ${character.ki || 'N/A'}</p>
      `;
      container.appendChild(charElement);
    });
  }
  