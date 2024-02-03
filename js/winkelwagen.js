/* eslint-disable no-use-before-define */
document.addEventListener('DOMContentLoaded', () => {
    const adjustButton = document.getElementById('adjustButton');
    const removeAllButton = document.getElementById('removeAllButton');

    function updateCartAmount(newAmount) {
        const cartAmountElement = document.getElementById('cartAmount');

        if (newAmount !== undefined) {
            cartAmountElement.textContent = newAmount.toString();
        } else {
            const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
            const cartAmount = storedProducts.reduce((total, product) => total + product.amount, 0);
            cartAmountElement.textContent = cartAmount.toString();
        }
    }

    function updateAmountInCart(product, change) {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const index = storedProducts.findIndex((p) => p.id === product.id);

        if (index !== -1) {
            if (change === 1 && storedProducts[index].stock > 0) {
                storedProducts[index].amount += change;
                storedProducts[index].stock -= change;
            } else if (change === -1 && storedProducts[index].amount > 0) {
                storedProducts[index].amount += change;
                storedProducts[index].stock += Math.abs(change);
            }

            saveProductsToLocalStorage(storedProducts);
            displaySelectedProducts();
            updateCartAmount();
        }
    }

    function createOrder() {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const selectedProducts = storedProducts.filter((product) => product.amount > 0);

        if (selectedProducts.length === 0) {
            const messageContainer = document.getElementById('messageContainer');
            messageContainer.textContent = 'Voeg eerst producten toe aan de winkelwagen voordat je kunt afronden.';
            return;
        }

        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();
        const orderId = `${day}${month}${year}${hours}${minutes}${seconds}${milliseconds}`;
        const order = {
            id: orderId,
            products: selectedProducts,
            totalPrice: selectedProducts.reduce((t, p) => t + p.amount * p.price, 0),
            date: new Date().toLocaleString(),
        };

        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));

        selectedProducts.forEach((product) => {
            const updatedProduct = { ...product };
            updatedProduct.amount = 0;

            const index = storedProducts.findIndex((p) => p.id === updatedProduct.id);
            if (index !== -1) {
                storedProducts[index] = updatedProduct;
            }
        });

        saveProductsToLocalStorage(storedProducts);

        const totalPriceElement = document.getElementById('totalPrice');
        const checkoutButton = document.getElementById('checkoutButton');

        if (totalPriceElement && checkoutButton) {
            totalPriceElement.style.display = 'none';
            checkoutButton.style.display = 'none';
            adjustButton.style.display = 'none';
            removeAllButton.style.display = 'none';
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.innerHTML = `
                <h3>Bedankt voor je bestelling! </h3>
                <p> Dit is je bestelnummer: ${orderId}</p>
                <p>Je kunt het na 2 werkdagen bij ons ophalen.</p>
                <p>Opsturen kan ook. Stuur ons dan een mail met je adresgegevens en je bestelnummer.</p>
            `;
        }

        updateCartAmount(0);

        displaySelectedProducts();
    }

    function displaySelectedProducts() {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const productContainer = document.getElementById('selected-products');
        productContainer.innerHTML = '';
        const selectedProducts = storedProducts.filter((product) => product.amount > 0);

        selectedProducts.forEach((product) => {
            const card = createSelectedProductCard(product);
            productContainer.appendChild(card);
        });

        displayTotalPrice(selectedProducts);
    }
    function fetchAndSaveProducts(updateAmount = true) {
        const storedProducts = JSON.parse(localStorage.getItem('products'));

        if (storedProducts) {
            displaySelectedProducts();
            if (updateAmount) {
                const newAmount = storedProducts.reduce((t, p) => t + p.amount, 0);
                updateCartAmount(newAmount);
            }
        } else {
            // Aanzetten voor testen
            // console.error('Producten niet gevonden in localStorage.');
        }
    }

    function saveProductsToLocalStorage(products) {
        if (typeof Storage !== 'undefined') {
            localStorage.setItem('products', JSON.stringify(products));
        } else {
            // Aanzetten voor testen
            // console.error('LocalStorage wordt niet ondersteund in deze browser.');
        }
    }

    function createSelectedProductCard(product) {
        const card = document.createElement('div');
        card.className = 'card mb-2 mt-2';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const name = document.createElement('h5');
        name.className = 'card-title';
        name.textContent = product.name;

        const pricePerUnit = document.createElement('p');
        pricePerUnit.className = 'card-text';

        const formattedPrice = parseFloat(product.price).toLocaleString('nl-NL', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        pricePerUnit.textContent = `Prijs per stuk: €${formattedPrice}`;

        const stock = document.createElement('p');
        stock.className = 'product-stock mt-2 mb-2';
        stock.textContent = `op voorraad: ${product.stock}`;

        const totalCost = document.createElement('p');
        totalCost.className = 'card-text';
        totalCost.textContent = `Totaalprijs per product: €${(product.amount * product.price).toFixed(2)}`;

        const amount = document.createElement('p');
        amount.className = 'card-text';
        amount.textContent = `Aantal: ${product.amount}`;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const addButton = document.createElement('button');
        addButton.className = 'button add btn btn-secondary btn-sm mb-2 ms-2 bi bi-plus-lg';
        addButton.addEventListener('click', () => updateAmountInCart(product, 1));

        const removeButton = document.createElement('button');
        removeButton.className = 'button remove btn btn-secondary btn-sm mb-2 ms-2 bi bi-dash-lg';
        removeButton.addEventListener('click', () => updateAmountInCart(product, -1));

        const deleteButton = document.createElement('button');
        deleteButton.className = 'button remove btn btn-danger btn-sm mb-2 ms-2 bi bi-x-lg';
        deleteButton.addEventListener('click', () => removeProductFromCart(product));

        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(removeButton);

        cardBody.appendChild(name);
        cardBody.appendChild(pricePerUnit);
        cardBody.appendChild(stock);
        cardBody.appendChild(amount);
        cardBody.appendChild(totalCost);

        cardBody.appendChild(buttonContainer);
        buttonContainer.appendChild(deleteButton);
        card.appendChild(cardBody);

        return card;
    }

    function displayTotalPrice(products) {
        const totalPriceElement = document.getElementById('totalPrice');

        const totalPrice = products.reduce((t, p) => t + p.amount * p.price, 0);

        const formattedTotalPrice = totalPrice.toLocaleString('nl-NL', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        totalPriceElement.textContent = `Totaalprijs: €${formattedTotalPrice}`;
    }
    function removeProductFromCart(product) {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const index = storedProducts.findIndex((p) => p.id === product.id);

        if (index !== -1) {
            const originalIndex = storedProducts.findIndex((p) => p.id === product.id);

            if (originalIndex !== -1) {
                storedProducts[originalIndex].stock += storedProducts[index].amount;
            }

            storedProducts[index].amount = 0;

            saveProductsToLocalStorage(storedProducts);

            displaySelectedProducts();

            updateCartAmount();
        }
    }

    function removeAllProducts() {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const updatedProducts = storedProducts.map((product) => {
            const updatedProduct = { ...product }; // Create a copy of the product
            updatedProduct.stock += updatedProduct.amount; // Herstel voorraad
            updatedProduct.amount = 0; // Zet de hoeveelheid in de winkelwagen op 0
            return updatedProduct; // Return the modified product
        });

        saveProductsToLocalStorage(updatedProducts);
        displaySelectedProducts();
        updateCartAmount();
    }

    if (removeAllButton) {
        removeAllButton.addEventListener('click', () => {
            removeAllProducts();
        });
    }

    fetchAndSaveProducts();

    window.addEventListener('storage', (event) => {
        if (event.key === 'products') {
            updateCartAmount();
        }
    });

    const checkoutButton = document.getElementById('checkoutButton');

    if (checkoutButton) {
        checkoutButton.addEventListener('click', createOrder);
    }

    if (adjustButton) {
        adjustButton.addEventListener('click', () => {
            window.location.href = 'webshop.html';
        });
    }
});
