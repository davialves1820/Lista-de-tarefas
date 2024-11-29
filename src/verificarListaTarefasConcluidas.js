const listaDeTarefasConcluidas = document.getElementById("lista-de-tarefas-concluidas");

export function tarefasConcluidasVazia() {
    // Verifica se existe algim elemento na lista de concluídos
    if (listaDeTarefasConcluidas.querySelectorAll("li").length === 0) {
        listaDeTarefasConcluidas.style.display = "none";
    } else {
        listaDeTarefasConcluidas.style.display = "block";
    }
}