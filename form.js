document.addEventListener('DOMContentLoaded', async () => {
    try {
        const configResponse = await fetch('config.json');
        const firebaseConfig = await configResponse.json();

        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();
        const subscribersRef = database.ref('subscribers');

        const form = document.getElementById('subscription-form');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                const email = document.getElementById('email').value;

                if (email) {
                    subscribersRef.push({ email })
                        .then(() => {
                            alert('¡Gracias por suscribirte!');
                            document.getElementById('email').value = '';
                        })
                        .catch((error) => {
                            console.error('Error al guardar el suscriptor:', error);
                            alert('Hubo un problema al procesar tu suscripción.');
                        });
                } else {
                    alert('Por favor, ingresa un correo válido.');
                }
            });
        } else {
            console.error('Formulario de suscripción no encontrado.');
        }

        subscribersRef.limitToLast(5).on('value', (snapshot) => {
            const subscribersList = document.getElementById('subscribers-list');
            if (!subscribersList) {
                console.error('Contenedor de suscriptores no encontrado.');
                return;
            }
            subscribersList.innerHTML = '';

            const subscribers = snapshot.val();
            if (subscribers) {
                const subscriberKeys = Object.keys(subscribers).reverse();
                subscriberKeys.forEach((key) => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('list-group-item');
                    listItem.textContent = subscribers[key].email;
                    subscribersList.appendChild(listItem);
                });
            } else {
                const emptyMessage = document.createElement('li');
                emptyMessage.classList.add('list-group-item', 'text-muted');
                emptyMessage.textContent = 'No hay suscriptores aún.';
                subscribersList.appendChild(emptyMessage);
            }
        });
    } catch (error) {
        console.error('Error al cargar la configuración de Firebase:', error);
    }

    console.log("Firebase inicializado correctamente:", firebase.apps.length > 0);
});
