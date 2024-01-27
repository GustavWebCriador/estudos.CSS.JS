var nome = "Gustavo Luiz Medeiros";
var cargo = "Desenvolvedor Full Stack";

var nomeHtml = document.getElementById("Nome-Perfil");
var cargoHtml= document.getElementById("cargo-html")
var Texto1= document.getElementById ("Texto-1");
var Texto2 = document.getElementById("Texto-2");

function colocarNomeNoHtml (nome) {
nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml (cargo) {
    cargoHtml.innerHTML = cargo;
}

function logarNome () {
    console.log(nome);
}

function clickNoProjetos () {
    console.log("Clicou no botão Projetos");
    Texto2.style.display = "Block" ; 
    Texto1.style.display= "none";
}

function clicknoSobre () {
    console.log("Clicou no botão Sobre!");
    Texto1.style.display= "block";
    Texto2.style.display="none";

}

colocarNomeNoHtml(nome);
colocarCargoNoHtml (cargo);


