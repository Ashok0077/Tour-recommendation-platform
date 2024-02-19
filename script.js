
const destinations = [
    { name: 'Paris', keywords: ['romantic', 'historic', 'culture', 'fashion'] },
    { name: 'Tokyo', keywords: ['vibrant', 'modern', 'technology', 'food'] },
    { name: 'Rome', keywords: ['historic', 'art', 'architecture', 'food'] },
    { name: 'Bali', keywords: ['beach', 'relaxing', 'scenic', 'culture'] },
  ];
  
  function getRecommendations() {
    const interestInput = document.getElementById('interestInput').value.toLowerCase();
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = ''; 
  
    const matchedDestinations = [];
  
    
    destinations.forEach(destination => {
      if (destination.keywords.some(keyword => interestInput.includes(keyword))) {
        matchedDestinations.push(destination.name);
      }
    });
  
    if (matchedDestinations.length > 0) {
      const recommendationText = document.createElement('p');
      recommendationText.textContent = 'Recommended destinations:';
      recommendationsDiv.appendChild(recommendationText);
  
      const list = document.createElement('ul');
      matchedDestinations.forEach(dest => {
        const listItem = document.createElement('li');
        listItem.textContent = dest;
        list.appendChild(listItem);
      });
      recommendationsDiv.appendChild(list);
    } else {
      const noRecommendationText = document.createElement('p');
      noRecommendationText.textContent = 'No destinations match your interests.';
      recommendationsDiv.appendChild(noRecommendationText);
    }
  }
  