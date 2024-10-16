const apiKey = '6b1f5bafefd14a9891c170825241610'; // Your provided API key

function getWeather() {
    const location = document.getElementById('location').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the full response
            
            // Check if the data structure is as expected
            if (data && data.current) {
                const temperature = data.current.temp_c;
                const humidity = data.current.humidity;
                const weatherCondition = data.current.condition.text;

                // Display weather information
                document.getElementById('weather-result').innerHTML = `
                    <h2>Weather in ${location}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Condition: ${weatherCondition}</p>
                `;

                // Get plant recommendations based on the weather data
                const recommendedPlants = recommendPlants(temperature, humidity);

                // Display recommended plants dynamically
                displayRecommendedPlants(recommendedPlants);
            } else {
                console.error('Unexpected data structure:', data);
                document.getElementById('weather-result').innerText = 'Weather data is unavailable';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-result').innerText = 'Error fetching weather data';
        });
}

function recommendPlants(temperature, humidity) {
    if (temperature > 30) {
        return [
            { name: 'Cactus', image: 'cactus.jpg', description: 'Thrives in hot, dry climates.' },
            { name: 'Succulents', image: 'succulent.jpg', description: 'Low-maintenance plants for hot climates.' },
            { name: 'Aloe Vera', image: 'aloevera.jpg', description: 'Hardy and medicinal plant for warm areas.' }
        ];
    } else if (humidity > 70) {
        return [
            { name: 'Ferns', image: 'fern.jpg', description: 'Thrives in high-humidity environments.' },
            { name: 'Bamboo', image: 'bamboo.jpg', description: 'Great for humid conditions.' },
            { name: 'Peace Lily', image: 'peacelily.jpg', description: 'Loves humid and warm environments.' }
        ];
    } else if (temperature >= 20 && temperature <= 30) {
        return [
            { name: 'Spider Plant', image: 'spider_plant.jpg', description: 'Ideal for mild, warm temperatures.' },
            { name: 'Lettuce', image: 'lettuce.jpg', description: 'Great for cool, moderate weather.' },
            { name: 'Basil', image: 'basil.jpg', description: 'Thrives in warm conditions.' }
        ];
    } else if (temperature >= 10 && temperature < 20) {
        return [
            { name: 'Spinach', image: 'spinach.jpg', description: 'Grows well in cooler temperatures.' },
            { name: 'Carrots', image: 'carrot.jpg', description: 'Prefers cooler climates for growing.' },
            { name: 'Rosemary', image: 'rosemary.jpg', description: 'Ideal for slightly cooler temperatures.' }
        ];
    } else if (temperature < 10) {
        return [
            { name: 'Kale', image: 'kale.jpg', description: 'Can tolerate cold weather.' },
            { name: 'Brussels Sprouts', image: 'brussels.jpg', description: 'Prefers cool climates.' },
            { name: 'Thyme', image: 'thyme.jpg', description: 'Does well in cold weather.' }
        ];
    } else {
        return [
            { name: 'Indoor Plants: Snake Plant', image: 'snakeplant.jpg', description: 'Perfect for indoors.' },
            { name: 'ZZ Plant', image: 'zzplant.jpg', description: 'Ideal for low-light conditions.' }
        ];
    }
}

function displayRecommendedPlants(recommendedPlants) {
    const plantContainer = document.getElementById('plant-recommendations');
    plantContainer.innerHTML = ''; // Clear previous recommendations

    recommendedPlants.forEach(plant => {
        plantContainer.innerHTML += `
            <div class="plant-card">
                <img src="images/${plant.image}" alt="${plant.name}">
                <h2>${plant.name}</h2>
                <p>${plant.description}</p>
            </div>
        `;
    });
}
