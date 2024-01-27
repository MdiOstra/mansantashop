document.addEventListener('DOMContentLoaded', () => {
    const adjustButton = document.getElementById('adjustButton');

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

        const totalCost = document.createElement('p');
        totalCost.className = 'card-text';
        totalCost.textContent = `Totaalprijs per product: €${(product.amount * product.price).toFixed(2)}`;

        const amount = document.createElement('p');
        amount.className = 'card-text';
        amount.textContent = `Aantal: ${product.amount}`;

        cardBody.appendChild(name);
        cardBody.appendChild(pricePerUnit);
        cardBody.appendChild(amount);
        cardBody.appendChild(totalCost);

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

    function createOrder() {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const selectedProducts = storedProducts.filter((product) => product.amount > 0);

        if (selectedProducts.length === 0) {
            const messageContainer = document.getElementById('messageContainer');
            messageContainer.textContent = 'Voeg eerst producten toe aan de winkelwagen voordat je kunt afronden.';
            return;
        }

        const now = new Date();
        const orderId = `${now.getDate()}${now.getMonth() + 1}${now.getFullYear()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;

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
        function saveProductsToLocalStorage(products) {
            if (typeof Storage !== 'undefined') {
                localStorage.setItem('products', JSON.stringify(products));
                console.log('Producten zijn succesvol opgeslagen in localStorage.');
            } else {
                console.error('LocalStorage wordt niet ondersteund in deze browser.');
            }
        }

        saveProductsToLocalStorage(storedProducts);

        const totalPriceElement = document.getElementById('totalPrice');
        const checkoutButton = document.getElementById('checkoutButton');

        if (totalPriceElement && checkoutButton) {
            totalPriceElement.style.display = 'none';
            checkoutButton.style.display = 'none';
            adjustButton.style.display = 'none';
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

    function fetchAndSaveProducts(updateAmount = true) {
        const storedProducts = JSON.parse(localStorage.getItem('products'));

        if (storedProducts) {
            displaySelectedProducts();
            if (updateAmount) {
                const newAmount = storedProducts.reduce((t, p) => t + p.amount, 0);
                updateCartAmount(newAmount);
            }
        } else {
            console.error('Producten niet gevonden in localStorage.');
        }
    }

    window.addEventListener('storage', (event) => {
        if (event.key === 'products') {
            console.log('Storage event detected. Updating cartAmount.');
            updateCartAmount();
        }
    });

    fetchAndSaveProducts();

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
