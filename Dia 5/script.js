var laticinios = []
var congelados = []
var doces = []
var frutas = []
var carnes = []
var verduras = []

var pergunta = prompt ("Você deseja incluir algum item na sua lista de compras? Digite Sim ou Não.")


if (pergunta == "Sim" || pergunta == "Não" ){
    var entra = false

    
    
} else{
    entra = true

    while (entra == true){
        alert ("Por favor, digite Sim ou Não!")
        var pergunta = prompt ("Você deseja incluir algum item na sua lista? Digite Sim ou Não.")
        
        if (pergunta == "Sim" || pergunta == "Não"){
            entra = false
        } else {
            entra ==true
        }
    }
}


while (pergunta == "Sim"){
   
    var produto = prompt("Qual produto deseja inserir?")
    var categoria = prompt ("Em qual categoria ele se insere? Categorias disponíveis: laticinios, congelados, doces, frutas, carnes ou verduras ")

    if (categoria == "laticinios"){
        laticinios.push (produto)
    } else if (categoria == "congelados"){
        congelados.push (produto)
    } else if (categoria == "doces"){
        doces.push (produto)
    } else if (categoria == "frutas"){
        frutas.push (produto)
    } else if (categoria == "carnes"){
        carnes.push(produto)
    } else if (categoria == "verduras") {
       verduras.push(produto)
    } else{
        alert ("Por favor, digite um produto a ser selecionado e se certifique que escolheu uma das categorias disponíveis.")
    }

    var pergunta = prompt ("Você deseja incluir mais algum item na sua lista? Digite Sim ou Não.")

    if (pergunta == "Sim" || pergunta == "Não" ){
        var entra = false
    
        
        
    } else{
        entra = true
    
        while (entra == true){
            alert ("Por favor, digite Sim ou Não!")
            var pergunta = prompt ("Você deseja incluir algum item na sua lista? Digite Sim ou Não.")
            
            if (pergunta == "Sim" || pergunta == "Não"){
                entra = false
            } else {
                entra ==true
            }
        }
    }

}

if (laticinios.length == 0 && congelados.length == 0 && doces.length == 0 && frutas.length == 0 & carnes.length == 0 && verduras.length == 0 ){
    alert ("Você não adicionou nada na sua lista de compras!")
} else {
    alert ("Lista de compras: Laticinios: " + laticinios + " ||| congelados: " + congelados + " |||doces: " + doces + " ||| frutas: " + frutas + " ||| carnes: "+ carnes + " ||| verduras: " + verduras)
}



 














