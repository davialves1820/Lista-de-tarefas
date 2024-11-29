import { criarNovaTarefa } from "./criarNovoElemento.js";
import { verificarListaTarefasVazia } from "./verificarTarefasVazias.js";

const conteudoInput = document.getElementById("input-item");
const listaDeTarefas = document.getElementById("lista-de-tarefas");

export function adicionarTarefa(evento) {
    // Impede o envio do formulário (se estiver dentro de um <form>) e a atualização da página
    evento.preventDefault();
    
    // Vefica se foi digitado algo no input
    if (conteudoInput.value === "" || conteudoInput.value.trim() === "") {
        alert("Digite alguma tarefa!!!"); // Exibe uma mensagem alertando para digitar algo
        return;
    }

    // Chama uma função que criar uma tarefa
    const novoElemento = criarNovaTarefa(conteudoInput.value);

    // Adiciona a nova tarefa a lista
    listaDeTarefas.appendChild(novoElemento);

    // Verifica se a lista de tarefas está vazia
    verificarListaTarefasVazia();

    // Atualiza o input retirando o texto que foi escrito anteriormente
    conteudoInput.value = "";
}