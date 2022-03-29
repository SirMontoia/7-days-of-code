var laticinios = []
var congelados = []
var doces = []
var frutas = []
var carnes = []
var verduras = []

function perguntar(){




pergunta = prompt ("Deseja inserir produtos na lista? Digite Sim ou Não. Caso queira remover um item da lista, digite Remover.")

if (pergunta == "Sim" || pergunta == "Não" || pergunta == "Remover" ){
    var entra = false

    
    
} else{
    entra = true

    while (entra == true){
        alert ("Por favor, digite Sim, Não ou Remover!")
        var pergunta = prompt ("Você deseja incluir algum item na sua lista? Digite Sim, Não ou Remover.")
        
        if (pergunta == "Sim" || pergunta == "Não" || pergunta == "Remover"){
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

    var pergunta = prompt ("Você deseja incluir ou excluir algum item na sua lista? Digite Sim, Não ou Remover.")

    if (pergunta == "Sim" || pergunta == "Não" || pergunta == "Remover" ){
        var entra = false
    
        } else{
        entra = true
    
        while (entra == true){
            alert ("Por favor, digite Sim ou Não!")
            var pergunta = prompt ("Você deseja incluir ou excluir algum item na sua lista? Digite Sim, Não ou Remover.")
            
            if (pergunta == "Sim" || pergunta == "Não" || pergunta == "Remover"){
                entra = false
            } else {
                entra ==true
            }
        }
    }

}

    if (laticinios.length == 0 && congelados.length == 0 && doces.length == 0 && frutas.length == 0 & carnes.length == 0 && verduras.length == 0 && pergunta == "Não" ){
    alert ("Você não adicionou nada na sua lista de compras!")
   
    } else if (pergunta == "Sim" || pergunta == "Não") {
    alert ( "Lista de compras:\n Laticinios: " + laticinios + "  \n congelados: " + congelados + "  \n doces: " + doces + "  \n frutas: " + frutas + "  \n carnes: "+ carnes + " \n verduras: " + verduras)
    }

    
    while (pergunta == "Remover"){

        if (laticinios.length == 0 && congelados.length == 0 && doces.length == 0 && frutas.length == 0 & carnes.length == 0 && verduras.length == 0 ){
            alert ("Você não tem itens para remover da lista ainda!")
            break;
            
        } else {
            var remover = prompt ("Escolha qual item da lista deseja remover!\n" + " Lista de compras:\n Laticinios: " + laticinios + " \n congelados: " + congelados + "\n doces: " + doces + " \n frutas: " + frutas + "\n carnes: "+ carnes + "\n verduras: " + verduras)
        }
    
        if (laticinios.includes(remover) || congelados.includes(remover) || doces.includes(remover) || frutas.includes(remover) || carnes.includes(remover) || verduras.includes(remover) ){

            if (laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover))
                alert ("O item " + remover + " foi removido com sucesso!")

            } else if (congelados.indexOf(remover) != -1){
                congelados.splice(congelados.indexOf(remover))
                alert ("O item " + remover + " foi removido com sucesso!")
            } else if (doces.indexOf(remover) != -1){
                doces.splice(doces.indexOf(remover))
                alert ("O item " + remover + " foi removido com sucesso!")
            } else if (frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover))
                alert("O item " + remover + " foi removido com sucesso!")
            } else if (carnes.indexOf(remover) != -1){
                carnes.splice(carns.indexOf(remover))
                alert ("O item " + remover + " foi removido com sucesso!")
            } else if (verduras.indexOf(remover) != -1){
                verduras.splice(verduras.indexOf(remover))
                alert ("O item " + verduras + " foi removido com sucesso!")
            } else {
                alert("Item não encontrado!")
            }
    
    
           alert(" Lista atualizada:\n" + " Lista de compras:\n Laticinios: " + laticinios + " \n congelados: " + congelados + "\n doces: " + doces + " \n frutas: " + frutas + "\n carnes: "+ carnes + "\n verduras: " + verduras)
           break;
    
    
        } else {
            alert ("Item não selecionado ou não encontrado!" )
            break;
        }
    
     

    }




}


 


    
    
















