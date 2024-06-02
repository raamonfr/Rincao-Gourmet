let barraMenuLateral = document.getElementById('barra-leteral-menu'), 
barrasMenu = document.getElementById('barras-menu');
const botaoAddCarrinho = document.querySelectorAll('.add-carrinho'),
notificacao = document.querySelector('.notificacao'),
iconeFechar = document.querySelector('.fechar'), 
tempo = document.querySelector('.tempo');
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


function irparaocardapio() {
    window.location.href = './pags/cardapio.html'
}

botaoAddCarrinho.forEach(botao => {
    botao.addEventListener('click', () => {
        notificacao.classList.add('ativo')
        tempo.classList.add('ativo')

        setTimeout(() => {
            notificacao.classList.remove('ativo')
        }, 5000)

        setTimeout(() => {
            tempo.classList.remove('ativo')
        }, 5300)
    })
})

iconeFechar.addEventListener('click', () => {
    notificacao.classList.remove('ativo')

    setTimeout(() => {
        tempo.classList.remove('ativo')
    }, 300)
})