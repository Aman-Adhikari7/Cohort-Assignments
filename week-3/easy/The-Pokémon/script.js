     
const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

document.getElementById('pokemon-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const number = parseInt(document.getElementById('number').value, 10);
    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML = '';

    try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?pageSize=${number}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        data.data.forEach(card => displayCard(card));
    } catch (error) {
        console.error('Error fetching Pokémon card data:', error);
    }

    function displayCard(card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        // Card image URL
        const cardImageUrl = card.images.large || 'https://via.placeholder.com/100';

        cardElement.innerHTML = `
            <h2>${card.name}</h2>
            <img src="${cardImageUrl}" alt="${card.name}" />
            <p>ID: ${card.id}</p>
            <p>Type: ${card.types ? card.types.join(', ') : 'N/A'}</p>
        `;

        cardContainer.appendChild(cardElement);
    }
   
});