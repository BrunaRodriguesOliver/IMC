
var pacientes = (document.querySelectorAll(".paciente")); //busca todas as teg "listas" da classe paiente.

 //percorre o tamanho do array
for(var i = 0; i < pacientes.length; i++ ){ 
    var paciente = pacientes[i]; //cariavel pciente, recebe a posição do array paciente

    var tdPeso = (paciente.querySelector(".info-peso")); //busa a tag info-peso
    var peso = tdPeso.textContent; //variavel recebe o conteudo da tag info-peso

    var tdAltura = (paciente.querySelector(".info-altura")); //busca a tag info-altura
    var altura = tdAltura.textContent;//recebe o conteudo da tag info-altura

    var tdImc = (paciente.querySelector('.info-imc')); 

    var pesoValido = validarPeso(peso); // peso é true ou false
    var alturaValida = validarAltura(altura); //altura inicia como true

    // valida o peso dentro dos parametros
    if(!pesoValido){
        console.log("Peso invalodo");
        pesoValido = false; // se for verdadeiro o peso recebe false
        tdImc.textContent= "Peso invalido"; //alterar o conteudo da info-peso 
        paciente.classList.add("paciente-invalido"); // altera a cor da font da linha
    }  

    //valida a altura dentro dos paramentros
    if(!alturaValida){
        console.log("Altura invalida")
        alturaValida = false;// se for verdadeiro a altura recebe falso
        tdImc.textContent = "Altura Invalida" //altera o conteudo da tag info-altura
        paciente.classList.add("paciente-invalido");
    }

    // se pese e altura forem true, calcula o imc
    if(pesoValido && alturaValida){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc; //tdImc recebe o resultado da conta
    }
}

function validarPeso(peso){
    if(peso >= 0 && peso < 1000 ){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura>= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

  
  

    


