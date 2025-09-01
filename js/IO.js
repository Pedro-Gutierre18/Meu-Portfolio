document.addEventListener('DOMContentLoaded', () => {

    /* --- Lógica do Botão Flutuante (FAB) --- */
    // (Seu código existente do FAB, etc., permanece aqui)
    const floatingIndexContainer = document.querySelector('.floating-index');
    if (floatingIndexContainer) {
        const fabToggler = floatingIndexContainer.querySelector('.fab-toggler');
        if (fabToggler) {
            fabToggler.addEventListener('click', () => {
                floatingIndexContainer.classList.toggle('active');
            });
        }
    }


    /* --- Lógica da Rolagem Suave (Smooth Scroll) --- */
    // (Seu código existente de rolagem suave aqui)
    const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
    allAnchorLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    if (floatingIndexContainer && floatingIndexContainer.classList.contains('active')) {
                        floatingIndexContainer.classList.remove('active');
                    }
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });


    /* --- LÓGICA DE ANIMAÇÃO COM INTERSECTION OBSERVER --- */

    // 1. Seleciona todos os elementos que queremos animar
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // 2. Verifica se o navegador suporta a API
    if ("IntersectionObserver" in window) {
      
      // 3. Cria o "observador"
      const observer = new IntersectionObserver((entries) => {
        // Itera sobre cada elemento que o observador está vigiando
        entries.forEach((entry) => {
          // Se o elemento está visível na tela (intersecting)...
          if (entry.isIntersecting) {
            // Adiciona a classe para torná-lo visível
            entry.target.classList.add('is-visible');
            // Para de observar o elemento para não animar de novo
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.1 // A animação dispara quando 10% do elemento estiver visível
      });

      // 4. Pede ao observador para "vigiar" cada um dos nossos elementos
      animatedElements.forEach((element) => {
        observer.observe(element);
      });

    } else {
      // Se o navegador for muito antigo e não tiver suporte, 
      // simplesmente mostra todos os elementos de uma vez.
      animatedElements.forEach((element) => {
        element.classList.add('is-visible');
      });
    }
});