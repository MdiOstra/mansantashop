function updateTable(products) {
    const tableBody = document.getElementById('productTableBody');

    // Leeg de huidige inhoud van de tabel
    tableBody.innerHTML = '';

    // Vul de tabel met de nieuwe gegevens
    products.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${product.id}</td>
        <td>${product.name}</td>
                         <td>${product.price}</td>
                         <td>${product.img}</td>
                         <td>${product.stock}</td>
                         <td>                   
                             <button type="button"
                             class="btn btn-primary btn-sm"
                              onclick="editProduct('${product.id}')">
                              Bewerken</button>
                              </td>
                        <td>
                        <button type="button"
                         class="btn btn-danger btn-sm"
                          onclick="removeProduct('${product.id}')">
                          Verwijderen</button>
                          </td>`;

        tableBody.appendChild(row);
    });
}
// Functie om de tabel bij te werken met de gegevens uit de lokale opslag
function updateTableFromLocalStorage() {
    // Haal de gegevens uit de lokale opslag
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Roep de functie aan om de tabel bij te werken
    updateTable(storedProducts);
}
// Functie om de lokale opslag opnieuw in te stellen uit mansanta.json
function resetLocalStorageFromJSON() {
    // Voer een verzoek uit om mansanta.json op te halen
    fetch('../mansanta.json')
        .then((response) => response.json())
        .then((data) => {
            // Zet de JSON-gegevens om naar een string en sla het op in de lokale opslag
            localStorage.setItem('products', JSON.stringify(data));

            // Vernieuw de tabel met de nieuwe gegevens
            updateTableFromLocalStorage();
        })
        .catch(() => {
            // Lege catch-clausule. Voor testfase console.error aanzetten.
            // Geen console.error('Fout bij het ophalen van mansanta.json:', error);
        });
}
// Functie om de knoppen voor acties te genereren
function generateActionButtons() {
    const actionButtonsContainer = document.getElementById('actionButtons');

    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'button');
    resetButton.classList.add('btn', 'btn-danger');
    resetButton.textContent = 'reset JSON';
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('bi', 'bi-arrow-counterclockwise');
    resetButton.appendChild(iconSpan);

    resetButton.addEventListener('click', resetLocalStorageFromJSON);

    actionButtonsContainer.appendChild(resetButton);
}
document.addEventListener('DOMContentLoaded', () => {
    // Roep de functie aan om de tabel met de actuele gegevens te vullen
    updateTableFromLocalStorage();
    // Genereer de knoppen
    generateActionButtons();
});

// Functie om een product te bewerken
/* eslint-disable no-unused-vars */
function editProduct(productId) {
    window.location.href = `edit-product.html?productId=${productId}`;
}

function removeProduct(productId) {
    // Haal de gegevens uit de lokale opslag
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Zoek het product op basis van het product-ID
    const indexToRemove = storedProducts.findIndex((product) => product.id === productId);

    // Controleer of het product is gevonden
    if (indexToRemove !== -1) {
        // Verwijder het product uit de array
        storedProducts.splice(indexToRemove, 1);

        // Werk de lokale opslag bij met de nieuwe gegevens
        localStorage.setItem('products', JSON.stringify(storedProducts));

        // Vernieuw de tabel met de nieuwe gegevens
        updateTableFromLocalStorage();
    } else {
        // Volgende regel aanzetten om te testen
        //  console.error(`Product met ID ${productId} kon niet worden gevonden.`);
    }
}
