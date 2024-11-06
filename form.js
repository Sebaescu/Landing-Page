document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    
    const data = { email: email };

    fetch('https://tuservidor.com/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),  
    })
    .then(response => response.json()) 
    .then(responseData => {
        console.log('Respuesta del servidor:', responseData);
        
        alert('Te has suscrito correctamente al newsletter!');
    })
    .catch((error) => {
        console.error('Error al enviar los datos:', error);
        alert('Hubo un error al suscribirte. Intenta nuevamente.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://tuservidor.com/api/news') 
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById('data-output');
            if (data && data.length > 0) {
                let newsHTML = '<h3>Últimas Noticias</h3><ul>';
                data.forEach(news => {
                    newsHTML += `<li>${news.title}</li>`;  
                });
                newsHTML += '</ul>';
                output.innerHTML = newsHTML;
            } else {
                output.innerHTML = '<p>No hay noticias disponibles.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener las noticias:', error);
            document.getElementById('data-output').innerHTML = '<p>Error al cargar las noticias.</p>';
        });
});
