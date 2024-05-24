document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        comment: document.getElementById('comment').value
    };

    emailjs.send('service_kacf8zq', 'template_dnftjcb', templateParams)
        .then(function(response) {
            alert('Comentario enviado correctamente!', response.status, response.text);
            document.getElementById('comment-form').reset();
        }, function(error) {
            alert('Ocurrió un error al enviar el comentario.', error);
        });
});
