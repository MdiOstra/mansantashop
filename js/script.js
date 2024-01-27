/* eslint-disable no-use-before-define */
document.addEventListener('DOMContentLoaded', () => {
    function saveProductsToLocalStorage(products) {
        if (typeof Storage !== 'undefined') {
            localStorage.setItem('products', JSON.stringify(products));
            console.log('Producten zijn succesvol opgeslagen in localStorage.');
        } else {
            console.error('LocalStorage wordt niet ondersteund in deze browser.');
        }
    }

    const products = 'all';
    function updateCartAmount() {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const cartAmountElement = document.getElementById('cartAmount');

        const cartAmount = storedProducts.reduce((total, product) => total + product.amount, 0);
        console.log('cartAmount:', cartAmount);
        cartAmountElement.textContent = cartAmount.toString();
    }

    function displayProducts() {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const allProducts = storedProducts.filter((product) => product.amount > -1);

        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';

        const row = document.createElement('div');
        row.className = 'row gy-4';

        allProducts.forEach((product) => {
            const card = createProductCard(product);
            row.appendChild(card);
        });

        productContainer.appendChild(row);
        updateCartAmount();
    }
    function updateAmount(product, change) {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const index = storedProducts.findIndex((p) => p.id === product.id);

        if (index !== -1) {
            if (change === 1 && storedProducts[index].stock > 0) {
                storedProducts[index].amount += change;
                storedProducts[index].stock -= 1;
                saveProductsToLocalStorage(storedProducts);
                displayProducts(products);
            } else if (change === -1 && storedProducts[index].amount > 0) {
                storedProducts[index].amount += change;
                storedProducts[index].stock += 1;
                saveProductsToLocalStorage(storedProducts);
                displayProducts(products);
            }
        }
    }
    function createProductCard(product) {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 d-flex align-items-stretch ';

        const card = document.createElement('div');
        card.className = 'card text-secondary ';
        card.style.width = '100%';

        const name = document.createElement('h1');
        name.className = 'fs-3 card-title product-name ms-2 mt-2 mb-2';
        name.textContent = product.name;

        const info = document.createElement('h5');
        info.className = 'product-info ms-2 mt-2 mb-2';
        info.textContent = `${product.info}`;

        const price = document.createElement('h5');
        price.className = 'product-price ms-2 mt-2 mb-2';

        // Formateer het getal als een kommagetal met twee decimalen
        const formattedPrice = parseFloat(product.price).toLocaleString('nl-NL', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        price.textContent = `prijs: €${formattedPrice}`;

        const stock = document.createElement('h5');
        stock.className = 'product-stock ms-2 mt-2 mb-2';
        stock.textContent = `op voorraad: ${product.stock}`;

        const amount = document.createElement('h2');
        amount.className = ' fs-4 product-amount ms-2 mt-2 mb-2';
        amount.textContent = `mijn bestelling: ${product.amount}`;

        const image = document.createElement('img');
        image.className = 'product-img card-img-top img-fluid mb-5';
        image.src = product.img;
        image.alt = product.name;
        image.style.width = '100%';
        image.style.height = 'auto';

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const addButton = document.createElement('button');
        addButton.className = 'button add btn btn-secondary mb-2 ms-2 bi bi-plus-lg';
        addButton.addEventListener('click', () => updateAmount(product, 1, products));

        const removeButton = document.createElement('button');
        removeButton.className = 'button remove btn btn-secondary mb-2 ms-2 bi bi-dash-lg';
        removeButton.addEventListener('click', () => updateAmount(product, -1, products));

        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(removeButton);

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(info);
        card.appendChild(price);
        card.appendChild(stock);

        card.appendChild(amount);
        card.appendChild(buttonContainer);

        col.appendChild(card);

        return col;
    }

    function fetchAndSaveProducts(initialDisplayType = 'all') {
        const storedProducts = JSON.parse(localStorage.getItem('products'));

        if (storedProducts) {
            displayProducts(initialDisplayType);
            updateCartAmount();
        } else {
            fetch('mansanta.json')
                .then((response) => response.json())
                .then((data) => {
                    saveProductsToLocalStorage(data);
                    displayProducts(initialDisplayType);
                    updateCartAmount();
                })
                .catch((error) => console.error('Fout bij het ophalen van JSON:', error));
        }
    }

    window.addEventListener('storage', (event) => {
        if (event.key === 'products') {
            console.log('Storage event detected. Updating cartAmount.'); updateCartAmount();
        }
    });

    fetchAndSaveProducts();
});
