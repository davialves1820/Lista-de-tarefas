import { dataEHora } from "./dataEHora.js";
import { editarTarefa } from "./editarItem.js";
import { excluirTarefa } from "./excluitItem.js";
import { tarefasConcluidasVazia } from "./verificarListaTarefasConcluidas.js";
import { verificarListaTarefasVazia } from "./verificarTarefasVazias.js";

const listaDeTarefas = document.getElementById("lista-de-tarefas");
const listaDeTarefasConcluidas = document.getElementById("lista-de-tarefas-concluidas");

// Variável auxiliar para contar o numero de tarefas
let contador = 0;

export function criarNovaTarefa(tarefa) {

    // Criar um novo elemento
    const novoElemento = document.createElement("li");

    const containerElemento = document.createElement("div");
    containerElemento.classList.add("container-tarefa-lista");
    
    const containerNomeDoItem = document.createElement("div");
    
    const containerCheckBox = document.createElement("div");
    containerCheckBox.classList.add("container-checkbox");
    
    const inputCheckBox = document.createElement("input");
    inputCheckBox.classList.add("checkbox-button");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    inputCheckBox.placeholder = "checkbox";
    
    const containerDentroDoCheckBox = document.createElement("div");
    containerDentroDoCheckBox.classList.add("checkbox-customizado")

    const labelCheckBox = document.createElement("label");
    labelCheckBox.setAttribute("for", inputCheckBox.id);

    // Adiciona um evento quando se clica no checkbox
    labelCheckBox.addEventListener("click", (click) => {
        const verificarClick = click.currentTarget.querySelector(".checkbox-button");
        const tarefa = click.currentTarget.closest("li").querySelector("#tarefa-lista");
        const checkboxCustomizado = click.currentTarget.querySelector(".checkbox-customizado");

        // Verifica se já foi clicado
        if (verificarClick.checked) {
            tarefa.style.textDecoration = "line-through";
            checkboxCustomizado.classList.add("checked");
            const horario = novoElemento.querySelector(".texto-data");
            horario.textContent = dataEHora();
            listaDeTarefasConcluidas.appendChild(novoElemento);
        } else { // Caso não tenha sido clicado
            tarefa.style.textDecoration = "none";
            checkboxCustomizado.classList.remove("checked");
            listaDeTarefas.appendChild(novoElemento);
        }
        verificarListaTarefasVazia();
        tarefasConcluidasVazia();
    });

    labelCheckBox.appendChild(inputCheckBox);
    labelCheckBox.appendChild(containerDentroDoCheckBox);

    const nomeTarefa = document.createElement("p");
    nomeTarefa.id = "tarefa-lista";
    nomeTarefa.innerText = tarefa;
    
    containerCheckBox.appendChild(labelCheckBox);
    
    containerNomeDoItem.appendChild(containerCheckBox);
    containerNomeDoItem.appendChild(nomeTarefa);
    
    const containerBotoes = document.createElement("div");
    
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    // Adiciona evento ao clicar em remover
    botaoRemover.addEventListener("click", () => {
        excluirTarefa(novoElemento)
    });

    const imagemRemover = document.createElement("img");
    imagemRemover.alt = "remover";
    imagemRemover.src = "./img/delete.svg";

    botaoRemover.appendChild(imagemRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");

    // Adiciona evento ao clicar em editar
    botaoEditar.addEventListener("click", () => {
        editarTarefa(novoElemento)
    });

    const imagemEditar = document.createElement("img");
    imagemEditar.alt = "editar";
    imagemEditar.src = "./img/edit.svg";
    
    botaoEditar.appendChild(imagemEditar);

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerElemento.appendChild(containerNomeDoItem);
    containerElemento.appendChild(containerBotoes);

    const dataEHoraTarefa = document.createElement("p");
    dataEHoraTarefa.classList.add("texto-data");
    
    dataEHoraTarefa.innerText = dataEHora();

    novoElemento.appendChild(containerElemento);
    novoElemento.appendChild(dataEHoraTarefa);

    return novoElemento;
}