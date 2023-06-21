
function arquivar(){
    var texto = document.getElementById("texto").value;
    var caixa = document.createElement("span");
    var div = document.createElement("div");      
    document.body.appendChild(div);      
    caixa.id = "assunto";
    caixa.innerHTML = texto;
    div.appendChild(caixa);
    div.classList.add("div-shadow");
  
    var data = document.getElementById("data").value;
    var hora = document.getElementById("hora").value;
    var dataHora = document.createElement("p");
    dataHora.innerHTML = " Dados: " + data + " às " + hora;
    div.appendChild(dataHora);

    var excluir = document.createElement("button");
    excluir.id = "excluir";
    excluir.classList="btn-add"
    excluir.innerHTML = "apagar";
    div.appendChild(excluir);
    excluir.onclick = apagar;

    var modificar = document.createElement("button");
    modificar.id = "Editar";
    modificar.classList="btn-add"
    modificar.innerHTML = "Editar ";
    div.appendChild(modificar);
    modificar.onclick = editar;

    function editar(){
        var alterar =prompt("Nome atual da academia ; "+"("+texto+")"+ " Altere o nome da academia ");
        if (alterar==false || alterar==""){
           caixa.innerHTML=texto;
      }else{
             caixa.innerHTML=alterar;
    }
    }

    function apagar(){
    div.remove();
    }
    
};

