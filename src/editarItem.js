import { dataEHora } from "./dataEHora.js";

export function editarTarefa(tarefa) {
    const novaTarefa = prompt("Nova tarefa");

    // Verifica se foi digitado algo
    if (novaTarefa === "" || novaTarefa.trim() === "") {
        return;
    }

    const nomeTarefa = tarefa.querySelector("#tarefa-lista");
    nomeTarefa.textContent = novaTarefa; // Substitui o nome antigo pelo novo
    
    const horario = tarefa.querySelector(".texto-data");
    horario.textContent = dataEHora(); // Atualiza o horário
}