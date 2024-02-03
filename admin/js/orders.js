function showOrderOverview() {
    // Haal de ordergegevens op uit de lokale opslag
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const tbody = document.getElementById('productTableBody');

    // Loop door elke order en toon de gewenste gegevens
    storedOrders.forEach((order, index) => {
        const orderId = order.id;
        const orderDate = order.date;
        const orderTotalPrice = order.totalPrice;

        // Voeg een nieuwe rij toe voor het eerste product van de order
        // ...

        const firstRow = document.createElement('tr');
        firstRow.innerHTML = `
    <td class="fw-bold text-primary">${orderId}</td>
    <td class="fw-bold text-primary">${orderDate}</td>
    <td class="fw-bold text-primary">€${orderTotalPrice.toFixed(2)}</td>
    <td>${order.products[0].name}</td>
    <td>${order.products[0].amount}</td>
`;

        // ...

        // Voeg de rij toe aan de tabel
        tbody.appendChild(firstRow);

        // Loop door de resterende producten in de order (start from index 1)
        for (let i = 1; i < order.products.length; i += 1) {
            // Maak een nieuwe rij aan voor elk product zonder orderId en orderTotalPrice
            const row = document.createElement('tr');
            row.innerHTML = `
                <td></td>
                <td></td>
                <td></td>
                <td>${order.products[i].name}</td>
                <td>${order.products[i].amount}</td>
            `;

            // Voeg de rij toe aan de tabel
            tbody.appendChild(row);
        }

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
