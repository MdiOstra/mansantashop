document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Controleer de inloggegevens (tijdelijk hardcoded voorbeeld)
        if (username === '1' && password === '1') {
            // Genereer een willekeurig token (voorbeeld, gebruik niet in productie)
            const token = Math.random().toString(36).substring(2);

            // Sla het token op in de sessionStorage
            sessionStorage.setItem('authToken', token);
            // const authToken = sessionStorage.getItem('authToken');

            // Inloggen gelukt, doorsturen naar het admin-paneel
            window.location.href = 'productoverzicht.html';
        } else {
            // Toon een foutmelding bij ongeldige inloggegevens
            alert('Ongeldige inloggegevens. Probeer opnieuw.');
        }
    });
});
