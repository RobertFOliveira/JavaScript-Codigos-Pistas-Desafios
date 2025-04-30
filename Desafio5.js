
/////
function Pista7() {
    const radios1 = document.querySelector('input[name= "Soma1"]:checked');

    if (radios1.value === "240") {
        alert("Parabéns! Você acertou o Desafio 7, você está indo muito bem.");

    } else {
        alert("Você não acertou desta vez o Desafio 7! O resultado da multiplicação é: 240");

    }

    const radios2 = document.querySelector('input[name= "Soma2"]:checked');

    if (radios2.value === "feliz") {
        alert("Parabéns! Você acertou o Desafio 8, você está indo muito bem.");

    } else {
        alert("Você errou o Desafio 8, mas não desista continue sempre tentando! A resposta é: feliz");
    }
    const radios3 = document.querySelector('input[name= "Soma3"]:checked');

    if (radios3.value === "40") {
        alert("Parabéns! Você acertou o Desafio 9, você está indo muito bem.");
        alert("Agora vamos para a próxima Pista");
        alert("Sou onde você guarda seu carro ou sua bicicleta. O que sou?");
    } else {
        alert("Você quase que acertou o Desafio 9, não desista! Cada amigo receberá: 40");
        alert("Agora vamos para a próxima Pista");
        alert("Sou onde você guarda seu carro ou sua bicicleta. O que sou?");
    }
}
