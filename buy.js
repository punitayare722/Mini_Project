// Sample data for plants
const plants = [
    { id: 1, name: 'Snake Plant', price: 15, image: 'images/snakeplant.jpg' },
    { id: 2, name: 'Aloe Vera', price: 12, image: 'images/aloevera.jpg' },
    { id: 3, name: 'Spider Plant', price: 10, image: 'images/spider_plant.jpg' },
    { id: 4, name: 'Rose Plant', price: 25, image: 'images/rose.jpg' },
];

// Initialize cart
let cart = [];

// Function to add a plant to the cart
function addToCart(plantId) {
    const plant = plants.find(p => p.id === plantId);
    if (plant) {
        cart.push(plant);
        updateCartCount();
        alert(`${plant.name} has been added to your cart!`);
    }
}

// Function to update the cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to display plants
function displayPlants() {
    const plantList = document.getElementById('plant-list');
    plants.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.className = 'plant-card';
        plantCard.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}">
            <h2>${plant.name}</h2>
            <p>Price: $${plant.price}</p>
            <button onclick="addToCart(${plant.id})">Add to Cart</button>
        `;
        plantList.appendChild(plantCard);
    });
}

// Call displayPlants on page load
window.onload = displayPlants;
