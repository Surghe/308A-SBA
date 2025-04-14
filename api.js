export async function fetchCharacters() {
    try {
      const response = await fetch('https://dragonball-api.com/api/characters');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched Characters:', data.items);
      return data.items;
    } catch (error) {
      console.error('Error fetching characters:', error);
      return [];
    }
  }