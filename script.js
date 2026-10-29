const botaoMenu = document.querySelector('#btn-menu');
const menuLateral = document.querySelector('#menu-lateral');
const fundoMenu = document.querySelector('#fundo-menu');
const fecharMenu = document.querySelector('#fechar-menu');

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.add('aberto');
    fundoMenu.classList.add('ativo');
});

fecharMenu.addEventListener('click', () => {
    menuLateral.classList.remove('aberto');
    fundoMenu.classList.remove('ativo');
});

fundoMenu.addEventListener('click', () => {
    menuLateral.classList.remove('aberto');
    fundoMenu.classList.remove('ativo');
});