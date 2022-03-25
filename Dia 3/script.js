var addHtml = "<div id = 'divInicial' > <label > Escolha uma área a seguir:</label> <select id= 'escolha1' onchange = 'primeiraResposta()'> <option>  </option> <option value = 'Front-End'> Front-End </option> <option value = 'Back-End'> Back-End </option>   "



var addBody = document.getElementById("oi")
addBody.innerHTML += addHtml
escolha = document.getElementById ("escolha1")


function primeiraResposta(){

function front (teste, teste1){ //método que retorna estrutura html a ser inserida e permite inserção de valores nos locais com ''teste''

    var addHtml2 = `<div > <label > Escolha um framework que deseja aprender:</label> <select id = 'pergunta1'> <option value = 'React'> ${teste} </option> <option value = 'Vue'> ${teste1} </option> </div> <br>`

    return addHtml2

}

function back (teste, teste1){  //método que retorna estrutura html a ser inserida e permite inserção de valores nos locais com ''teste''
    var addHtml3 = `<div > <label > Escolha uma linguagem que deseja aprender:</label> <select id = 'pergunta1'> <option value = 'C#'> ${teste} </option> <option value = 'Java'> ${teste1} </option> </div> <br>`
    
    return addHtml3

}

switch (escolha.value){ //switch case que depende do valor da tag select com id ''escolha1''

    case "Front-End":
    
    addBody.innerHTML += front("React" , "Vue")
    
    document.getElementById("divInicial").innerHTML = '' //zera o escrito anterior
    
    addBody.innerHTML += `<div> <label > Escolha qual o foco que você deseja dar aos seus estudos:</label> <select > <option value = 'FullStack'> Fullstack </option> <option value = '${escolha.value}'> ${escolha.value} </option> </select> <button onclick = 'respostaFinal()'> Enviar </button> </div>  <br>`
    
    break;

case "Back-End":
    
    addBody.innerHTML += back("C#" , "Java")
    
    document.getElementById("divInicial").innerHTML = '' 
    
    addBody.innerHTML += `<div > <label > Escolha qual o foco que você deseja dar aos seus estudos:</label> <select > <option value = 'FullStack'> Fullstack </option> <option value = '${escolha.value}'> ${escolha.value} </option> </select> <button onclick = 'respostaFinal()'> Enviar </button> </div> <br>`
    
    break;



}

}

function resetar (){
    addBody.innerHTML = addHtml // reseta o escrito para o original
    

}

var listaTecnologias = [] // lista que recebe as tecnologias do prompt

function respostaFinal (){

    
    var tecno = prompt("Tem alguma tecnologia que você gostaria de aprender? Digite sim ou não abaixo")
    
    if (tecno == "sim" || tecno == "Sim"){
        
        tecno = prompt("Qual outra tecnologia que você gostaria de aprender?")
        

        while (tecno == ''){ 

            alert ("Digite um valor válido!")
            tecno = prompt("Qual outra tecnologia que você gostaria de aprender?")
        } 
        
        

        

            while(tecno != null){

                if(tecno == ''){
                    alert ("Digite um valor válido! Ou digite cancelar se tiver terminado de escolher as opções")
                    tecno = prompt("Qual outra tecnologia que você gostaria de aprender?")
                }

                else if (tecno != ''){
    
                    
                        listaTecnologias.push(tecno)
                        alert (`Que incrível, ${tecno} é uma ótima escolha!`)
                        tecno = prompt("Qual outra tecnologia que você gostaria de aprender? ")
                        console.log(listaTecnologias)
                } 
                else if(tecno == null) {
                    
                    alert ("Tecnologias do seu interesse: " + listaTecnologias + ". Mãos à obra!")
                    tecno = null
                    

                }
    
            }
        
           
           
        } else if (tecno == "não" || tecno == null ) {
            alert ("Você não selecionou nenhuma tecnologia")
        }
        else{
            alert ("Por favor, se atente às possibilidades de resposta")
        }

        

        if (listaTecnologias.length === 0){

            alert ("Pense bem! Deve exisitr alguma tecnologia que você queira se aprofundar!")


        } else{

            alert ("Tecnologias do seu interesse: " + listaTecnologias + ". Mãos à obra!")

        }
   
        
   
    } 
    

    


