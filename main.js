document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonObject = {};

        formData.forEach(function(value, key) {
            jsonObject[key] = value;
        });

        const jsonData = JSON.stringify(jsonObject);

        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});                  
