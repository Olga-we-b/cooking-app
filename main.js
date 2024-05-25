document.addEventListener('DOMContentLoaded', function(){
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        let formData = new FormData(form);
        let jsonObiect = {};

        formData.forEach(function(value, key){
            jsonObiect[key] = value;
        });

        let jsonData = JSON.stringify(jsonObiect);

        console.log(jsonData)

    })
})