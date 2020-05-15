var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
       exibeMensagensDeErro(erros);
        return;
    }
    adicionaPacienteNaTabela(paciente);

    form.reset();//após adicionar, ele limpa os campos
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    // Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML= "";//permite controlar o html interno do elemento
    erros.forEach(function(erro){//mesma função do for, percorre o array e faz uma função
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura:form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura)
    }
        return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); //Cria Tr
    pacienteTr.classList.add("paciente"); //monta a classe
    
    //Chama função montaTd, uma para td
    //adiciona as Tds filho na Tr pai, Paciente
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td"); //cria o elemento td
    td.textContent = dado; //recebe o dado, ex nome
    td.classList.add(classe);// adiciona a classe ex info-nome

    return td
}

function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");//coloca um conteudo dentro do array
    }
    if(!validarPeso(paciente.peso)){
        erros.push("Peso inválido!");
    }
    if(!validarAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco!")
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco!");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não poser ser em branco!");
    }
    return erros;
}