function enviarEmail(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const params = {
        from_name : document.getElementById("nome").value,
        email_id : document.getElementById("email").value,
        mensagem : document.getElementById("mensagem").value,
    };

    emailjs.send("service_twog88b","template_rtjal7c", params)
        .then(function(response) {
            // Limpa o formulário
            document.getElementById("nome").value = '';
            document.getElementById("email").value = '';
            document.getElementById("mensagem").value = '';
            
            // Mostra mensagem de sucesso
            alert("Email enviado com sucesso!");
        })
        .catch(function(error) {
            console.error("Erro ao enviar email:", error);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        })
        .finally(function() {
            // Restaura o botão ao estado original
            btnEnviar.textContent = textoOriginal;
            btnEnviar.disabled = false;
        });
}