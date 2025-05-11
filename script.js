document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Feedback visual para o usuário
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Mensagem de sucesso
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        } else {
            throw new Error('Erro ao enviar mensagem');
        }
    })
    .catch(error => {
        // Mensagem de erro
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde ou entre em contato por outro meio.');
        console.error('Error:', error);
    })
    .finally(() => {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });
});