document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymaj domyślne przesyłanie formularza

    // Pobierz wartości wpisane przez użytkownika
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordVer = document.getElementById('password-ver').value;

    // Sprawdź, czy hasła się zgadzają
    if (password !== passwordVer) {
        alert("Hasła się nie zgadzają!");
        return;
    }

    // Przekieruj na stronę user_credentials z parametrami URL
    window.location.href = `user_credentials.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
});