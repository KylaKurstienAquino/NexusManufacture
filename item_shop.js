document.addEventListener('DOMContentLoaded', function () {
    // Assuming you have a list of vehicles
    const vehiclesData = [
        { type: 'Car', model: 'Sedan', image: 'car_image_url' },
        { type: 'Motorcycle', model: 'Sport Bike', image: 'motorcycle_image_url' },
        { type: 'Scooter', model: 'Electric Scooter', image: 'scooter_image_url' },
        { type: 'Truck', model: 'Pickup Truck', image: 'truck_image_url' },
        // Add more vehicles as needed
    ];

    const itemShop = document.getElementById('item-shop');

    // Dynamically generate HTML for vehicles
    vehiclesData.forEach(vehicle => {
        const vehicleElement = document.createElement('div');
        vehicleElement.classList.add('item');
        vehicleElement.innerHTML = `
            <h2>${vehicle.type}</h2>
            <p>${vehicle.model}</p>
            <img src="${vehicle.image}" alt="${vehicle.model}">
            <button class="add-to-cart">Add to Cart</button>
            <button class="add-to-favorite">Add to Favorite</button>
        `;
        itemShop.appendChild(vehicleElement);
    });

    // Add event listeners for add to cart and add to favorite buttons
    itemShop.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const item = event.target.closest('.item');
            // Add logic for adding item to cart
            console.log('Added to cart:', item.querySelector('h2').textContent);
        }

        if (event.target.classList.contains('add-to-favorite')) {
            const item = event.target.closest('.item');
            // Add logic for adding item to favorites
            console.log('Added to favorites:', item.querySelector('h2').textContent);
        }
    });
});
