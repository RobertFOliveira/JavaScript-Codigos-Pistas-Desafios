// Início dos Desafios Perguntas de Matemática e Português.
function Pista1() {
    const radios1 = document.querySelector('input[name= "Soma1"]:checked');

    if (radios1.value === "1.869") {
        alert("Parabéns! Você acertou o Desafio1!");
    } else {
        alert("Desta vez você não acertou o Desafio 1! O resultado da soma é: 1869");
    }
    const radios2 = document.querySelector('input[name= "Soma2"]:checked');

    if (radios2.value === "47") {
        alert("Parabéns! Você acertou o Desafio 2!");
    } else {
        alert("Desta vez você não acertou Desafio 2! O resultado da soma é: 47");
    }
    const radios3 = document.querySelector('input[name= "Soma3"]:checked');

    if (radios3.value === "fui") {
        alert("Parabéns! Você acertou o Desafio 3!");
        alert("Agora vamos para a próxima Pista");
        alert("Sou um lugar aconchegante onde tem cama e cobertor e travesseiro para o seu descanso.");
        // Pista para o Quarto
    } else {
        alert("Desta vez você não acertou o Desafio 3! O verbo no passado é: fui");
        alert("Agora vamos para a próxima Pista");
        alert("Sou um lugar aconchegante onde tem cama e cobertor e travesseiro para o seu descanso.");
        // Pista para o Quarto
        
    }
}
