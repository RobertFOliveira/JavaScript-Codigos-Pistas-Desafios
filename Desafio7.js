/////
function Pista14() {
    const radios1 = document.querySelector('input[name= "Soma1"]:checked');

    if (radios1.value === "74") {
        alert("Parabéns! Você acertou o Desafio 14!.");

    } else {
        alert("Você quase que acertou o Desafio 14, não desista! A resposta é: 74");

    }

    const radios2 = document.querySelector('input[name= "Soma2"]:checked');

    if (radios2.value === "320") {
        alert("Parabéns! Você acertou novamente o Desafio 15!.");

    } else {
        alert("Você quase que acertou o Desafio 15, não desista! Cada morador produz por ano em kg: 320");

    }

    const radios3 = document.querySelector('input[name= "Soma3"]:checked');

    if (radios3.value === "52") {
        alert("Parabéns! Você acertou o Desafio 16, você está cada vez mais próximo do tesouro.");
        alert("Agora vamos para a próxima Pista");
        alert("Estou onde você armazena comida e onde o frio é rei. Me abra para ver o que eu tenho a oferecer!");
    } else {
        alert("Você quase que acertou o Desafio 16, não desista! Cada morador produz por ano em kg: 52");
        alert("Agora vamos para a próxima Pista");
        alert("Estou onde você armazena comida e onde o frio é rei. Me abra para ver o que eu tenho a oferecer!");
    }
}

