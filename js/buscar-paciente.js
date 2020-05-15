var botaoAdicionar =  document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest(); //objeto responsavel por fazer requiição ao attp

    xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes");// pega o endereço de url
    
    xhr.addEventListener("load", function(){ //adiciona a função de click e carrega. 
        var erroAjax = document.querySelector("#erro-ajax"); //recebe a mensagem de spam
        if (xhr.status == 200) { //se não der nenhum erro
            erroAjax.classList.add("invisivel");//adiciona a classe invisivel
            var resposta = xhr.responseText;//a função responseText traz o resultado
            var pacientes = JSON.parse(resposta);// JSON pega a requisição e parde. converte em um array js
    
            pacientes.forEach(function(paciente) { //para cada paciente do array
                adicionaPacienteNaTabela(paciente); //adiciona na tabela 
            });
        } else {
            erroAjax.classList.remove("invisivel");// senão remove a classe invisel
        }
      
    });

    xhr.send() //envia a requisição
});