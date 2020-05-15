var campoFiltro = document.querySelector("#filtrar-tabela"); //variavel recebe o elemento de filtrar-tabela

campoFiltro.addEventListener("input", function(){ //adiciona a função input"recebe valor digitado"
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");//variavel recebe os elementos da classe paciente

    if (this.value.length > 0){ //this se refere a variavel campoFiltro, dona do evento
        for (var i = 0; i < pacientes.length; i++){//percorre o array davariavel pacientes
            var paciente = pacientes[i];//recebe a posição
            var tdNome = paciente.querySelector(".info-nome"); //tdNome recebe a classe info_nome
            var nome = tdNome.textContent; //altera o conteudo de info-nome
            var expressao = new RegExp(this.value, "i"); //Expressão regular, usada para compara strings
            if (!expressao.test(nome)){ //compara as letrar do nome, com as letras digitadas
                paciente.classList.add("invisivel"); //adiciona o estilo.css que esconde a palavra
            } else {
                paciente.classList.remove("invisivel");//retira o efeito invisivel e mostra a palavra
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]; //a cada elemento percorrido 
            paciente.classList.remove("invisivel"); //remove o efeito invisivel da palavra
        }
    }    
});