let barraMenuLateral = document.getElementById('barra-leteral-menu')
let barrasMenu = document.getElementById('barras-menu')
var menuAberto = false


function abrirMenu() {
    barraMenuLateral.style.transform = 'translateX(0)'
    menuAberto = true
    document.body.classList.add('no-scroll');
    document.addEventListener('touchmove', preventScroll, { passive: false });
}

// Função para fechar o menu
function fecharMenu() {
    barraMenuLateral.style.transform = 'translateX(700px)'
    menuAberto = false
    document.body.classList.remove('no-scroll');
    document.removeEventListener('touchmove', preventScroll, { passive: false });
}

function preventScroll(event) {
    event.preventDefault();
}

// Adicionando evento de clique ao botão
barrasMenu.addEventListener('click', abrirMenu)

// Adicionando evento de clique ao documento
document.addEventListener('click', (event) => {
    if (menuAberto && !barraMenuLateral.contains(event.target) && event.target !== barrasMenu) {
        fecharMenu()
    }
})

