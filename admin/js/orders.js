function showOrderOverview() {
    // Haal de ordergegevens op uit de lokale opslag
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const tbody = document.getElementById('productTableBody');

    // Loop door elke order en toon de gewenste gegevens
    storedOrders.forEach((order, index) => {
        const orderId = order.id;
        const orderDate = order.date;
        const orderTotalPrice = order.totalPrice;

        // Loop door elk product in de order
        order.products.forEach((product) => {
            // Maak een nieuwe rij aan voor elk product
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${orderId}</td>
                <td>${orderDate}</td>
                <td>€${orderTotalPrice.toFixed(2)}</td>
                <td>${product.name}</td>
                <td>${product.amount}</td>
            `;

            // Voeg de rij toe aan de tabel
            tbody.appendChild(row);
        });

        // Voeg een lege rij toe na elke order, behalve na de laatste order
        if (index < storedOrders.length - 1) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = '<td colspan="5">&nbsp;</td>';
            tbody.appendChild(emptyRow);
        }
    });
}

// Roep de functie aan om de ordergegevens te tonen
showOrderOverview();
