document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('img').addEventListener('input', function updateImgPreview() {
        // Haal de waarde op van het img-veld
        const imgUrl = this.value;

        // Haal het imgPreview-element op
        const imgPreview = document.getElementById('imgPreview');

        // Werk de src van het imgPreview-element bij
        imgPreview.src = imgUrl;
    });

    // Functie om een nieuw product toe te voegen
    function addProduct() {
        // Haal de waarden op van de invoervelden
        const idInput = document.getElementById('id');
        const name = document.getElementById('name').value;
        const info = document.getElementById('info').value;
        const price = parseFloat(document.getElementById('price').value);
        const stock = parseInt(document.getElementById('stock').value, 10);
        const amount = 0; // Amount is standaard 0
        const img = document.getElementById('img').value;
        // resetForm();
        // Controleer of alle vereiste velden zijn ingevuld
        if (!name || Number.isNaN(Number(price)) || Number.isNaN(Number(stock)) || !img) {
            alert('Vul alle vereiste velden in.');
            return;
        }

        let id = idInput.value;
        if (!id) {
            // Haal bestaande producten op uit de lokale opslag
            const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

            // Bepaal het hoogste bestaande ID en verhoog met 1
            const maxId = existingProducts.reduce((max, product) => {
                const productId = parseInt(product.id.slice(1), 10) || 0;
                return Math.max(max, productId);
            }, 0);

            id = `p${maxId + 1}`;
        }

        // Werk het ID-veld bij
        idInput.value = id;
        // Creëer een nieuw productobject
        const newProduct = {
            id, name, info, price, stock, amount, img,
        };

        // Voeg het nieuwe product toe aan de lokale opslag
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
        existingProducts.push(newProduct);
        localStorage.setItem('products', JSON.stringify(existingProducts));

        function resetForm() {
            document.getElementById('id').value = '';
            document.getElementById('name').value = '';
            document.getElementById('info').value = '';
            document.getElementById('price').value = '';
            document.getElementById('stock').value = '';
            document.getElementById('img').value = '';
            document.getElementById('imgPreview').src = '../images/';
        }

        resetForm();
        // Optioneel: vernieuw de tabel met de nieuwe gegevens
        // updateTableFromLocalStorage();

        // Optioneel: reset het formulier
    }

    // Voeg een event listener toe aan de knop voor het toevoegen van producten
    const addButton = document.querySelector('#productForm button');
    addButton.addEventListener('click', addProduct);

    // Optionele functie om het formulier te resetten na het toevoegen van een product
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('imgPreview');

    image.addEventListener('error', () => {
        image.style.display = 'none';
    });

    image.addEventListener('load', () => {
        image.style.display = 'block';
    });
});
