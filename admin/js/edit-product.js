function getProductById(productId) {
    // Haal de gegevens uit de lokale opslag
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Zoek het product op basis van het product-ID
    return storedProducts.find((product) => product.id === productId) || null;
}

document.addEventListener('DOMContentLoaded', () => {
    // Haal het product-ID op uit de querystring
    const urlParams = new URLSearchParams(window.location.search);
    const productIdFromUrl = urlParams.get('productId');

    // Zoek het element waarin je de tekst wilt plaatsen
    const editMessageElement = document.getElementById('editMessage');
    function fillFormWithProductData(productId) {
        // Haal het product op uit de lokale opslag of via een API op basis van het product-ID
        const product = getProductById(productId);

        // Vul de formulierelementen met de huidige waarden van het product
        document.getElementById('id').value = product.id;
        document.getElementById('name').value = product.name;
        document.getElementById('info').value = product.info;
        document.getElementById('price').value = product.price;
        document.getElementById('stock').value = product.stock;
        document.getElementById('img').value = `${product.img}`;

        // Update de voorbeeldafbeelding
        document.getElementById('imgPreview').src = `../${product.img}`;
    }
    // Controleer of het element is gevonden voordat je de tekst instelt
    if (editMessageElement) {
    // Stel de tekst in op basis van het product-ID
        fillFormWithProductData(productIdFromUrl);
    } else {
    // Volgende regel aanzetten om te testen
    // console.error('Het element met ID "editMessage" is niet gevonden in de DOM.');
    }
    // Voeg een event listener toe aan het img-veld om de preview bij te werken
    document.getElementById('img').addEventListener('input', function () {
        // Haal de waarde op van het img-veld
        const imgUrl = this.value;

        // Haal het imgPreview-element op
        const imgPreview = document.getElementById('imgPreview');
        imgPreview.src = imgUrl;
    });

    // Voeg deze functie toe aan je edit-product.js-bestand
    function editProduct() {
        // Haal het product op uit de lokale opslag
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const productId = document.getElementById('id').value;
        const productIndex = storedProducts.findIndex((product) => product.id === productId);
        const product = storedProducts[productIndex];

        // Maak het gewijzigde productobject
        const updatedProduct = {
            ...product,
            name: document.getElementById('name').value,
            info: document.getElementById('info').value,
            price: document.getElementById('price').value,
            stock: document.getElementById('stock').value,
            img: document.getElementById('img').value,
        };

        // Werk de lijst met producten bij
        storedProducts[productIndex] = updatedProduct;

        // Sla de bijgewerkte lijst op in de lokale opslag
        localStorage.setItem('products', JSON.stringify(storedProducts));
        window.location.href = 'productoverzicht.html';
    }

    document.getElementById('wijzigButton').addEventListener('click', () => {
        // Roep de JavaScript-functie editProduct aan
        editProduct();
    });

    const image = document.getElementById('imgPreview');

    image.addEventListener('error', () => {
        image.style.display = 'none';
    });

    image.addEventListener('load', () => {
        image.style.display = 'block';
    });
});
