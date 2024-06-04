// Declaração de variáveis
let barraMenuLateral = document.getElementById('barra-leteral-menu');
let barrasMenu = document.getElementById('barras-menu');
let botaoAddCarrinho = document.querySelectorAll('.add-carrinho');
let notificacao = document.querySelector('.notificacao');
let iconeFechar = document.querySelector('.fechar');
let tempo = document.querySelector('.tempo');
let menuAberto = false;

// Função para abrir o menu lateral
function abrirMenu() {
    barraMenuLateral.style.transform = 'translateX(0)';
    menuAberto = true;
    document.body.classList.add('no-scroll');
    document.addEventListener('touchmove', preventScroll, { passive: false });
}

// Função para fechar o menu lateralkkkkkkkkkkkkkkk
function fecharMenu() {
    barraMenuLateral.style.transform = 'translateX(700px)';
    menuAberto = false;
    document.body.classList.remove('no-scroll');
    document.removeEventListener('touchmove', preventScroll, { passive: false });
}

// Função para prevenir o scroll, pra n ficar rolando enquanto ele ta aberto, se n buga
function preventScroll(event) {
    event.preventDefault();
}

// Evento de click nas barras do menu pra abrir o menu né
barrasMenu.addEventListener('click', abrirMenu);

// Evento de click pra caso a pessoa clique fora do menu... pra fechar o menukkkkkkk
document.addEventListener('click', (event) => {
    if (menuAberto && !barraMenuLateral.contains(event.target) && event.target !== barrasMenu) {
        fecharMenu();
    }
});

// Funções para redirecionar pra outras páginas só
function irParaCardapio() {
    window.location.href = './pags/cardapio.html';
}

function irParaCarrinho() {
    window.location.href = '../pags/carrinho.html';
}

function irFinalizaCompra() {
    window.location.href = '../pags/finalizarCompra.html';
}

// Evento de click nos botoes "add-carrinho" pra aparecer a notificacaozinha show
botaoAddCarrinho.forEach(botao => {
    botao.addEventListener('click', () => {
        const isActive = notificacao.classList.contains('ativo');
        if(!isActive){
            console.log("estou ativo",botao.classList)
            notificacao.classList.add('ativo');
            tempo.classList.add('ativo');
            
            setTimeout(() => {
                notificacao.classList.remove('ativo');
            }, 5300);
            
            setTimeout(() => {
                tempo.classList.remove('ativo');
            }, 5300);
        }
    });
});

// Evento de click no icone de fechar da notificacao
iconeFechar.addEventListener('click', () => {
    notificacao.classList.remove('ativo');

    setTimeout(() => {
        tempo.classList.remove('ativo');
    }, 300);
});
