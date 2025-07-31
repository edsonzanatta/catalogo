// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- NOSSO "BANCO DE DADOS" DE PRODUTOS ---
    // Os dados do catálogo vivem aqui, dentro do código.
    // Para adicionar um novo produto, basta adicionar um novo objeto a este array.
    const produtos = [
        {
            id: 1,
            nome: "Câmera Vintage",
            preco: "R$ 250,00",
            descricao: "Uma câmera de filme clássica, perfeita para entusiastas da fotografia analógica. Lente de 50mm incluída.",
            imagem: "images/produto-1.jpg"
        },
        {
            id: 2,
            nome: "Fone de Ouvido Retrô",
            preco: "R$ 85,00",
            descricao: "Estilo dos anos 80 com qualidade de som moderna. Confortável e leve, ideal para o dia a dia.",
            imagem: "images/produto-2.jpg"
        },
        {
            id: 3,
            nome: "Relógio de Bolso",
            preco: "R$ 320,00",
            descricao: "Elegância atemporal em um relógio de bolso com mecanismo aparente. Um item de colecionador.",
            imagem: "images/produto-3.jpg"
        },
		{
            id: 4,
            nome: "Relógio de Bolso",
            preco: "R$ 320,00",
            descricao: "Elegância atemporal em um relógio de bolso com mecanismo aparente. Um item de colecionador.",
            imagem: "images/produto-4.jpg"
        },
        // Adicione mais produtos aqui, seguindo o mesmo modelo.
    ];

    // --- SELEÇÃO DOS ELEMENTOS DO DOM ---
    const catalogoGrid = document.getElementById('catalogo-grid');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalNome = document.getElementById('modal-nome');
    const modalDescricao = document.getElementById('modal-descricao');
    const modalPreco = document.getElementById('modal-preco');
    const closeModalBtn = document.getElementById('close-modal');

    // --- FUNÇÕES ---

    /**
     * Renderiza os produtos na grade do catálogo.
     * Lê o array 'produtos' e cria um card para cada um.
     */
    function renderizarCatalogo() {
        catalogoGrid.innerHTML = ''; // Limpa a grade antes de renderizar

        produtos.forEach(produto => {
            // Cria o elemento 'div' que será o card do produto
            const card = document.createElement('div');
            card.className = 'card-produto';
            // Adiciona um 'data-id' para sabermos qual produto foi clicado
            card.dataset.id = produto.id;

            // Preenche o conteúdo do card com HTML
            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">${produto.preco}</p>
            `;

            // Adiciona um evento de clique no card para abrir o modal
            card.addEventListener('click', () => abrirModal(produto.id));

            // Adiciona o card completo na grade
            catalogoGrid.appendChild(card);
        });
    }

    /**
     * Abre o modal com os detalhes de um produto específico.
     * @param {number} id - O ID do produto a ser exibido.
     */
    function abrirModal(id) {
        // Encontra o produto no nosso "banco de dados" pelo ID
        const produto = produtos.find(p => p.id === id);

        // Preenche as informações do modal com os dados do produto
        modalImg.src = produto.imagem;
        modalNome.textContent = produto.nome;
        modalDescricao.textContent = produto.descricao;
        modalPreco.textContent = produto.preco;

        // Exibe o modal
        modal.style.display = 'flex';
    }

    /**
     * Fecha a janela do modal.
     */
    function fecharModal() {
        modal.style.display = 'none';
    }

    // --- EVENT LISTENERS (Ouvintes de Eventos) ---

    // Adiciona o evento para fechar o modal no botão 'X'
    closeModalBtn.addEventListener('click', fecharModal);

    // Adiciona um evento para fechar o modal se o usuário clicar fora da caixa de conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            fecharModal();
        }
    });

    // --- INICIALIZAÇÃO ---
    // Chama a função para renderizar o catálogo assim que a página carregar
    renderizarCatalogo();
});
