const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');
adicionarTarefasSalvas();

function criarLi() {
    const li = document.createElement('li');
    return li;
}


function criarTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limparInput();
    criarBotaoApagar(li);
    salvarTarefas();
}

inputNovaTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputNovaTarefa.value) return;
        criarTarefa(inputNovaTarefa.value);
    }
})

function criarBotaoApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = "Remover"
    botaoApagar.setAttribute('class', 'remover');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
}


function limparInput() {
    inputNovaTarefa.value = "";
    inputNovaTarefa.focus();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Remover', '');
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

btnAddTarefa.addEventListener('click', function (e) {
    if (!inputNovaTarefa.value) return;
    criarTarefa(inputNovaTarefa.value);
})

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('remover')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}