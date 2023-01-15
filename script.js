function diceGame(){
	
	//gera número random para o dado
	let diceRandomX = Math.floor(Math.random() * 6 +1);
    let diceRandomY = Math.floor(Math.random() * 6 + 1);


    //carrega a imagem do dado com o número random gerado.
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + diceRandomX + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + diceRandomY + ".png"); 


    //Verificação do resultado.
	if (diceRandomX > diceRandomY) {
		document.querySelector("h1").textContent = "Player 1 ganhou!";
	} else if (diceRandomX < diceRandomY) {
		document.querySelector("h1").textContent = "Player 2 ganhou!";
	} else {
		document.querySelector("h1").textContent = "Empate";
	}

}