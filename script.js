function limparCaixaDeMensagem() {
    // Obtém a referência à caixa de mensagem
    const caixaDeMensagem = document.getElementById("caixa-de-mensagem");

    // Limpa o conteúdo da caixa de mensagem
    caixaDeMensagem.value = "";
	
	// Define a altura e largura desejadas
    caixaDeMensagem.style.width = "300px"; // Defina a largura em pixels
    caixaDeMensagem.style.height = "150px"; // Defina a altura em pixels
}
