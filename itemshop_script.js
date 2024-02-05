document.addEventListener('DOMContentLoaded', function () {
    fetch('backend.php')
    .then(response => response.json())
    .then(data => {
        const itemShop = document.getElementById('item-shop');
        data.forEach(vehicle => {
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
    })
    .catch(error => console.error('Error fetching data:', error));

    // Add event listeners for add to cart and add to favorite buttons
    document.getElementById('item-shop').addEventListener('click', function (event) {
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