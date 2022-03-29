/*var operacao = ''
var numero1 = null
var numero2 = null

function mais(){
operacao = "Soma"
}

function menos(){
 operacao = "Menos"
}

function divisao(){
 operacao = "Divisao"
}

function multi(){
operacao = "Multiplicacao"
}


function igual(){

switch (operacao){

case "Soma": 
    
var resultado = numero1 + numero2
    break;

case "Menos":

var resultado = numero1-numero2
break;

case "Divisao":

var resultado = numero1/numero2
break;

case "Multiplicacao":

var resultado = numero1*numero2
break;
}

alert ("O resultado é : " + resultado)

}

function resetar(){
    operação = ''
    numero1 = null
    numero2 = null
}

function um(){

if (numero1 == null && numero2 == null){

    numero1 = 1
    

} else if (numero1 != null && numero2 != null) {
   alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
} else{
    numero2 = 1
}


}

function dois(){

    if (numero1 == null && numero2 == null){

        numero1 = 2
        
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }

    else {
       numero2 = 2
    }

}

function tres(){

    if (numero1 == null && numero2 == null){

        numero1 = 3
       
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }
    else {
       numero2 = 3
    }

}

function quatro(){

    if (numero1 == null && numero2 == null){

        numero1 = 4
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }
    else {
       numero2 = 4
    }

}

function cinco(){

    if (numero1 == null && numero2 == null){

        numero1 = 5
       
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }
    else {
       numero2 = 5
    }

}
function seis(){

    if (numero1 == null && numero2 == null){

        numero1 = 6
        
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }
    else {
       numero2 = 6
    }

}
function sete(){

    if (numero1 == null && numero2 == null){

        numero1 = 7
        
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }
    else {
       numero2 = 7
    }

}

function oito(){

    if (numero1 == null && numero2 == null){

        numero1 = 8
        
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }
    else {
       numero2 = 8
    }

}

function nove(){

    if (numero1 == null && numero2 == null){

        numero1 = 9
        
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }
    else {
       numero2 = 9
    }

}

function zero(){

    if (numero1 == null && numero2 == null){

        numero1 = 0
        
    
    } else if (numero1 != null && numero2 != null) {
        alert("Ambos números foram preenchidos! Resete o programa para recolocar os valores.")
    
    }
    else {
       numero2 = 0
    }

}
*/

var operacao = prompt("Qual operação deseja realizar? Digite Soma, Subtração, Divisão ou Multiplicação!")

if (operacao == "Soma" || operacao == "Subtração" || operacao == "Divisão" || operacao == "Multiplicação" ){

    var entrar = false

    
} else {

    var entrar = true

    while (entrar == true){
        operacao = prompt ("Por favor, escolhe dentre as operações disponíveis: Soma, Subtração, Divisão ou Multiplicação.")

        if (operacao == "Soma" || operacao == "Subtração" || operacao == "Divisão" || operacao == "Multiplicação" ){
            var entrar = false
        } else{
            var entrar = true
        }

    }

}

while (operacao == "Soma" || operacao == "Subtração" || operacao == "Divisão" || operacao == "Multiplicação" ) {





var numero1 = parseInt(prompt ("Escolha o primeiro número"))
var numero2 = parseInt(prompt ("Escolha o segundo número"))


switch (operacao){

    case "Soma": 
        
    var resultado = numero1 + numero2
        break;
    
    case "Subtração":
    
    var resultado = numero1-numero2
    break;
    
    case "Divisão":
    
    var resultado = numero1/numero2
    break;
    
    case "Multiplicação":
    
    var resultado = numero1*numero2
    break;
    }

    

    alert("O resultado é " + resultado)
    operacao = prompt ("Escolha uma nova operação ou termine o programa!")

    if (operacao == "Soma" || operacao == "Subtração" || operacao == "Divisão" || operacao == "Multiplicação" || operacao == "Sair" ){

        var entrar = false
    
        
    } else {
    
        var entrar = true
    
        while (entrar == true){
            operacao = prompt ("Por favor, escolhe dentre as operações disponíveis: Soma, Subtração, Divisão, Multiplicação ou Sair")
    
            if (operacao == "Soma" || operacao == "Subtração" || operacao == "Divisão" || operacao == "Multiplicação" || operacao == "Sair" ){
                var entrar = false
            } else{
                var entrar = true
            }
    
        }
    
    }

}

alert("Até a próxima!")
    
   