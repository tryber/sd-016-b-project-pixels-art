//criar div dentro da div color-pallet que possuam a classe color;
function criaDivCores (array){
    let arrayCores = ["black", "red", "green", "blue"];
    let divPaleta = document.getElementById('color-palette');
    for (let i = 0; i <arrayCores.length; i+=1){
        let caixa = document.createElement('div');
        caixa.style.background = arrayCores[i];
        caixa.className = "color"
        divPaleta.appendChild(caixa)
    }
}
criaDivCores();

//criar um quadro com n quadrados 

let n = 5;
let quadro = document.getElementById('pixel-board');

function criaColuna(){
    for (let i=2; i <=n; i+=1){
        let pixelColuna = document.createElement('div');
        criaLinha()
        quadro.appendChild(pixelColuna);
    }

    // for(let i=0; i < pixelColuna; i+=1){
    //     pixelColuna.className = "pixel"
    // }
}
criaColuna()

function criaLinha(){
     for (let i=1 ; i <=n; i+=1){
       let pixelLinha = document.createElement('div');
       pixelLinha.className= "pixel linha";
       quadro.appendChild(pixelLinha);
     }
 }
 criaLinha()

//cria botao que limpa o quadro

function botaoReiniciar (){
    let botaoBranco = document.createElement('button');
    let corpoDoSite = document.getElementsByTagName('body')[0];
    botaoBranco.innerHTML = 'Limpar';
    botaoBranco.id = "clear-board"
    corpoDoSite.appendChild(botaoBranco);
}
botaoReiniciar()

let botaoBranco = document.querySelector("#clear-board");

botaoBranco.addEventListener("click", reiniciaJogo)

let branco =  'rgb(255, 255, 255)';
function reiniciaJogo(){
    let quadrados = document.querySelectorAll(".pixel");
    for (let i =0; i<quadrados.length; i+=1){
        quadrados[i].style.backgroundColor = branco
    }
}

//seleciona uma cor na paleta

window.onload = function() {
   let paletaDeCores = document.querySelectorAll(".color");
   paletaDeCores[0].className = "color selected"
}

    let paletaDeCores = document.querySelectorAll(".color");
    for (let i=0; i < paletaDeCores.length; i+=1){
        paletaDeCores[i].addEventListener("click",corSelecionada)
    }
    
function corSelecionada(event){
    for (let i=0; i < paletaDeCores.length; i+=1){
        paletaDeCores[i].classList.remove('selected')
        event.target.classList.add('selected')
    }
}

//pinta o pixel escolhido, com a cor selecionada
    
    let quadroDepixels = document.querySelectorAll(".pixel");
    for(let i= 0; i <quadroDepixels.length; i+=1){
        quadroDepixels[i].addEventListener("click",pintarOpixelselecionado)
    }
    
function pintarOpixelselecionado(event){
    
    for (let i = 0; i < quadroDepixels.length; i+=1){
        let corSelecionada = document.querySelector(".selected");
        event.target.style.backgroundColor = corSelecionada.style.backgroundColor
}
}

//Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

function criaInput (){

}
criaInput();
