// Início dos Desafios Perguntas de Matemática e Português.
/////
function Pista4() {
    const radios1 = document.querySelector('input[name= "Soma1"]:checked');

    if (radios1.value === "63") {
        alert("Parabéns! Você acertou o Desafio 4!");
    } else {
        alert("Desta vez você não acertou o Desafio 4! O resultado da soma é: 63");

    }
    const radios2 = document.querySelector('input[name= "Soma2"]:checked');

    if (radios2.value === "um") {
        alert("Parabéns! Você acertou o Desafio 5!");

    } else {
        alert("Você errou o Desafio 5, mas não desista continue sempre tentando! O artigo correto é: um");

    }

    const radios3 = document.querySelector('input[name= "Soma3"]:checked');

    if (radios3.value === "9") {
        alert("Parabéns! Você acertou o Desafio 6!");
        alert("Agora vamos para a próxima Pista");
        alert("Sou o lugar onde você toma banho todos os dias para ficar limpinho e cheirosinho.");
        // Pista para o Banheiro
    } else {
        alert("Você quase que acertou o Desafio 6, não desista! Cada página terá: 9");
        alert("Agora vamos para a próxima Pista");
        alert("Sou o lugar onde você toma banho todos os dias para ficar limpinho e cheirosinho.");
        // Pista para o Banheiro
    }
}
