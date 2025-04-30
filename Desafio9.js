/////
function Pista19() {
    const radios1 = document.querySelector('input[name= "Soma1"]:checked');

    if (radios1.value === "6.547") {
        alert("Parabéns! Você acertou novamente o Desafio 19!.");

    } else {
        alert("Você quase que acertou o Desafio 19, não desista! A resposta é: 6.547");

    }
    const radios2 = document.querySelector('input[name= "Soma2"]:checked');

    if (radios2.value === "395") {
        alert("Parabéns! Você acertou o Desafio 20, você está indo muito bem.");

    } else {
        alert("Você quase que acertou o Desafio 20, a resposta é: 395");

    }
    const radios3 = document.querySelector('input[name= "Soma3"]:checked');
    /// Desafio 21
    if (radios3.value === "1825") {
        alert("Parabéns! Você acertou o Desafio 21, você está indo muito bem.");

    } else {
        alert("Você quase que acertou o Desafio 21, Dom Pedro II nasceu no ano de: 1825");

    }
}
