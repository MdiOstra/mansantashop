document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutLink');

    logoutButton.addEventListener('click', () => {
        // Verwijder het sessietoken uit de sessionStorage
        sessionStorage.removeItem('authToken');

        // Stuur de gebruiker terug naar de inlogpagina
        window.location.href = 'login.html';
    });
});
