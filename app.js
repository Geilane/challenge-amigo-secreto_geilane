//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // 1. Captura o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // 2. Valida a entrada
    if (nomeAmigo) { // Verifica se o nome não está vazio
        // 3. Adiciona o nome ao array de amigos
        amigos.push(nomeAmigo);

        // 4. Limpa o campo de entrada
        inputAmigo.value = '';

        // 5. Atualiza a lista de amigos na tela
        atualizarListaAmigos();
    } else {
        // Exibe um alerta se o campo estiver vazio
        alert('Por favor, insira um nome.');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    // 1. Obter o elemento da lista
    const listaAmigos = document.getElementById('listaAmigos');

    // 2. Limpar a lista existente
    listaAmigos.innerHTML = ''; // Remove todos os elementos da lista

    // 3. Percorrer o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Criar um novo elemento de lista (<li>)
        const itemLista = document.createElement('li');

        // 5. Adicionar o nome do amigo ao elemento <li>
        itemLista.textContent = amigos[i];

        // 6. Adicionar o elemento <li> à lista
        listaAmigos.appendChild(itemLista);
    }
}

// Função para sortear os amigos
function sortearAmigo() {
    // 1. Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // 2. Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obter o nome sorteado
    const nomeSorteado = amigos[indiceAleatorio];

    // 4. Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}