$(document).ready(function(){
    // 1. Inicializa o Isotope no container dos projetos
    //    Usamos '.grid' como o seletor do container
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item', // Usamos '.grid-item' como o seletor dos seus projetos
        layoutMode: 'fitRows'
    });

    // 2. Conecta os botões de filtro ao Isotope
    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        
        // Troca a classe 'active' entre os botões
        $('#filters button').removeClass('active');
        $(this).addClass('active');
    });
});