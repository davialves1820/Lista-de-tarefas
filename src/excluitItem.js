import { tarefasConcluidasVazia } from "./verificarListaTarefasConcluidas.js";
import { verificarListaTarefasVazia } from "./verificarTarefasVazias.js";

export function excluirTarefa(tarefa) {
    const confirmacao = confirm("Você tem certeza que quer excluir?");
    
    // Verifica se teve a confirmação do usuário
    if (confirmacao) {
        tarefa.remove();
        tarefasConcluidasVazia();
        verificarListaTarefasVazia();
    }
}