/////
function Pista10(){
    const radios1 = document.querySelector('input[name= "Soma1"]:checked');

    if (radios1.value === "brilha"){
        alert("Parabéns! Você acertou novamente o Desafio 10!.");
     
    }else {
        alert("Você errou o Desafio 10, mas não desista continue sempre tentando! A resposta é: brilha.");
       
    }

    const radios2 = document.querySelector('input[name= "Soma2"]:checked');

    if (radios2.value === "48"){
        alert("Parabéns! Você acertou novamente o Desafio 11!.");
    
    }else {
        alert("Você não acertou desta vez o Desafio 11! O resultado da multiplicação é: 48");
     
    }
    const radios3 = document.querySelector('input[name= "Soma3"]:checked');

    if (radios3.value === "assistimos"){
        alert("Parabéns! Você acertou novamente o Desafio 12!.");
        alert("Agora vamos para a próxima pista.");
        alert("Eu gosto de ninar suas roupas até a hora de usá-las. No meu lugar, há sempre algo novo a se vestir.")
        // Pista Pilha de Roupa
    }else {
        alert("Você errou o Desafio 12, mas não desista continue sempre tentando! A resposta é: assistimos.");
        alert("Agora vamos para a próxima pista.");
        alert("Eu gosto de ninar suas roupas até a hora de usá-las. No meu lugar, há sempre algo novo a se vestir.")
        // Pista Pilha de Roupa
    }
}
