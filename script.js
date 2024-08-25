let botãoMostrarProjeto = document.querySelector('.btn-mostrar-projetos');
let projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botãoMostrarProjeto.addEventListener('click', () => {
    mostrarProjetosInativos();
    escoderBotão();
});

function mostrarProjetosInativos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function escoderBotão() {
    botãoMostrarProjeto.classList.add('remover');
}
