/////
function Pista16() {
    const radios1 = document.querySelector('input[name= "Soma1"]:checked');

    if (radios1.value === "inteligente") {
        alert("Parabéns! Você acertou o Desafio 16!.");

    } else {
        alert("Você quase que acertou o Desafio 16, não desista! A resposta é: inteligente");

    }

    const radios2 = document.querySelector('input[name= "Soma2"]:checked');

    if (radios2.value === "72") {
        alert("Parabéns! Você acertou o Desafio 17!.");

    } else {
        alert("Você não acertou desta vez o Desafio 17, não desista ainda há grande chance! A quantidade de peças de roupa é: 72");

    }

    const radios3 = document.querySelector('input[name= "Soma3"]:checked');

    if (radios3.value === "21075") {
        alert("Parabéns! Você acertou novamente o Desafio 18!.");
        alert("Você chegou até aqui e achou o Tesouro. Parabéns pela persistência!");


    } else {
        alert("Você não acertou desta vez o Desafio 18, não desista ainda há grande chance! A quantidade de tijolos que faltam é: 21075");
        alert("Você chegou até aqui e achou o Tesouro. Parabéns pela persistência!");

    }
}

