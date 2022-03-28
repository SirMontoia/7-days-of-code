var numMaquina = parseInt(Math.random()*10)  // Multiplica por 10 pois, por padrão, o metodo retorna de 0 a 1. Para garantir que seja de 0 a 10 a multiplicação é feita. Além disso, parseInt garante que não haverá casa decimal depois da vírgula.

var contador = 0


// Outra forma de fazer com if e else, através de um botão e input HTML

/*function chutar(){ 

    var chute = document.getElementById("chute")
    var numeroChute = chute.value
    contador++

    
    if (contador >= 3){
        alert ("Suas tentativas terminaram! O número era " + numMaquina + ". Resete o jogo para tentar novamente.")

    } else if (numeroChute == numMaquina){
        alert("Parabéns! Você acertou com " + (3-contador) + " tentativas sobrando!")
    } else if (numeroChute < numMaquina){
        alert("Errado! O número em questão é maior! Você tem mais " + (3-contador) + " tentativas sobrando.")
    } else if (numeroChute > numMaquina){
        alert("Errado! O número em questão é menor! Você tem mais " + (3-contador)+ " tentativas sobrando ")
    } else if (numeroChute > 10 || numeroChute < 0) {
        alert("Escolha um número dentro do intervalo sugerido!")
        contador --
    }

    


}*/


while ( contador < 3){ //Define contador como a condição para o laço
        contador++
         var numeroChute = parseInt(prompt("Adivinhe o número que estou pensando!"))
         console.log(numeroChute)
        
        if (numeroChute == numMaquina){
            alert ("Parabéns! Você acertou com " + (3-contador) + " tentativas restantes!")
            contador = 4 // para sair do laço
            
            
    } else if  (numeroChute > 10 || numeroChute < 0 || numeroChute === NaN) {
        alert("Escolha um número dentro do intervalo sugerido!")
        
        contador --
    } else if (numeroChute < numMaquina){
        alert("Errado! O número em questão é maior! Você tem mais " + (3-contador) + " tentativas sobrando.")
        
    } else if (numeroChute > numMaquina){
        alert("Errado! O número em questão é menor! Você tem mais " + (3-contador)+ " tentativas sobrando ")
        
    }   

   
}

alert ("O número em questão era " + numMaquina + ". Resete o jogo para tentar novamente!")



function resetar(){
    contador = 0
    numMaquina = parseInt(Math.random()*10)
}