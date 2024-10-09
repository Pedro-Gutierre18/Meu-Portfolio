ScrollReveal({ reset: true });

// Sobre mim
ScrollReveal().reveal('.sobre-mim-imagem', { 
    duration: 3000,
    distance: '500px',
    easing: 'ease',
    origin: 'left',
    opacity: 0,
});
ScrollReveal().reveal('.sobre-mim-texto', { 
    duration: 3500,
    distance: '500px',
    easing: 'ease',
    origin: 'right',
    opacity: 0,
});

// Projetos
ScrollReveal().reveal('.projeto-card:nth-child(1)', { 
    duration: 2000,
    distance: '600px',
    easing: 'ease-in-out',
    origin: 'right',
});
ScrollReveal().reveal('.projeto-card:nth-child(2)', { 
    duration: 2500,
    distance: '600px',
    easing: 'ease-in-out',
    origin: 'right',
});
ScrollReveal().reveal('.projeto-card:nth-child(3)', { 
    duration: 3000,
    distance: '600px',
    easing: 'ease-in-out',
    origin: 'right',
});