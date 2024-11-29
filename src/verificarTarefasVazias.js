const listaDeTarefas = document.getElementById("lista-de-tarefas");

export function verificarListaTarefasVazia() {
    // Verifica se existe algum elemento na lista 
    const listaVazia = document.getElementById("lista-de-tarefas-vazia");
    if (listaDeTarefas.querySelectorAll("li").length === 0) {
        listaVazia.style.display = "block";
    } else {
        listaVazia.style.display = "none";
    }
}