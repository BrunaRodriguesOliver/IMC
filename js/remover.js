var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){ //dona do eveto
    var alvoEvento = event.target; //alvo do enveto TD
    var paiDoAlvo = alvoEvento.parentNode;//Pai do alvo TR = paciente  = remover
     
    alvoEvento.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);

    //Outra forma de fazer é event.target.patentNode.remove()

  });