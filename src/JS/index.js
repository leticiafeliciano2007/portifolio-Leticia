/* - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 
  - Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele     */

//- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const pjtInativo = document.querySelectorAll('.projeto:not(.ativo)');


btnMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe ativo nos projetos escondidos
    mostrarMaisPjts();

    //- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no htmlc
    //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
    esconderBtn();
});

function esconderBtn() {
    btnMostrarProjetos.classList.add('remover');
}

function mostrarMaisPjts() {
    pjtInativo.forEach(pjtInativo => {
        pjtInativo.classList.add('ativo');
    });
}
