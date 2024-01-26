document.addEventListener('DOMContentLoaded', () => {
    // Controleer of de gebruiker is ingelogd (sessie-token aanwezig)
    const authToken = sessionStorage.getItem('authToken');

    if (!authToken) {
        // Als er geen sessie-token is, stuur de gebruiker terug naar de inlogpagina
        window.location.href = 'login.html';
    }
});
