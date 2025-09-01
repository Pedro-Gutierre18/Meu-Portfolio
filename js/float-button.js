// Aguarda o documento HTML ser completamente carregado e analisado
document.addEventListener('DOMContentLoaded', () => {

    /* --- Lógica do Botão Flutuante (FAB) --- */

    // Seleciona o container principal do botão
    const floatingIndexContainer = document.querySelector('.floating-index');

    // Só continua se o container do botão existir na página
    if (floatingIndexContainer) {
        
        // Seleciona o botão que o usuário vai clicar
        const fabToggler = floatingIndexContainer.querySelector('.fab-toggler');

        // Só continua se o botão de clique existir
        if (fabToggler) {
            
            // Adiciona um "escutador" de evento de clique ao botão
            fabToggler.addEventListener('click', () => {
                // A cada clique, ele adiciona ou remove a classe 'active' do container.
                // É essa classe que o CSS usa para mostrar ou esconder o menu de links.
                floatingIndexContainer.classList.toggle('active');
            });
        }
    }

});