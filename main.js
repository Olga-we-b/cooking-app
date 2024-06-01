document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymaj domyślne przesyłanie formularza

    // Pobierz wartości wpisane przez użytkownika
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordVer = document.getElementById('password-ver').value;

   const userData = {
    name: name,
    email: email,
    password: password,
    passwordVer: passwordVer
   }

   localStorage.setItem('userData', JSON.stringify(userData));
   window.location.href = 'user_credentials.html';


});