var nome="Ítalo Weiler e Castro";
var cargo="CTO-Growdev";

var NomeHtml= document.getElementById("Nome-no-html");
var cargoHtml=document.getElementById("Cargo-no-html");

var texto1= document.getElementById("texto-1");
var texto2= document.getElementById("texto-2");


function colocarNomeNoHtml(nome){
NomeHtml.innerHTML=nome;
}

function colocarCargoNoHtml(cargo){
cargoHtml.innerHTML=cargo;
}

function logarNome() {
    console.log(nome);
}

function clickNoProjetos(){
    console.log("Clicou no botão projetos");
    texto2.style.display="block";
    texto1.style.display="none";
}

    function clickNoSobre(){
        console.log("Clicou no botão Sobre");
        texto2.style.display="none";
        texto1.style.display="block";   
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);