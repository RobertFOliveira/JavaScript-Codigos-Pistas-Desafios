

function checkRadio() {  
    var gender = document.querySelector('input[name="gender"]:checked').value;  
    var style = document.querySelector('input[name="style"]:checked').value;  
    var payment = document.querySelector('input[name="payment"]:checked').value;  
    console.log("Gênero: " + gender);  
    console.log("Estilo: " + style);  
    console.log("Pagamento: " + payment);  
}  
