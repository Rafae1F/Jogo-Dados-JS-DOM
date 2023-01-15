function jogarDados(){
	
    //gera número random para o dado
    let dadoAleatorioX = Math.floor(Math.random() * 6) + 1;
    let dadoAleatorioY = Math.floor(Math.random() * 6) + 1;


    //carrega a imagem do dado com o número random gerado.
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + dadoAleatorioX + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + dadoAleatorioY + ".png"); 


    //Verificação do resultado.
	if (dadoAleatorioX > dadoAleatorioY) {
		document.querySelector("h1").textContent = "Jogador 1 ganhou!";
	} else if (dadoAleatorioX < dadoAleatorioY) {
		document.querySelector("h1").textContent = "Jogador 2 ganhou!";
	} else {
		document.querySelector("h1").textContent = "Empate";
	}

}
