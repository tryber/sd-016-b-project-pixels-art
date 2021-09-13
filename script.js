// Paleta de Cores
// Gerador de cores aleatórias
function colorGenerator () {
    let randomColor1 = Math.floor(Math.random() * 255) + 1;
    let randomColor2 = Math.floor(Math.random() * 255) + 1;
    let randomColor3 = Math.floor(Math.random() * 255) + 1;

    let randomColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;

    return randomColor;
}


// Função para setar primeira cor;
function setFirstColor() {
    let firstColor = document.querySelector("#firstColor");
    firstColor.style.backgroundColor = "black"
}
setFirstColor();

// Função para setar cores aleatórias

function setRandomColors () {
    let randomPalettes = document.getElementsByClassName("randomColors");
    for (let i = 0; i < randomPalettes.length; i+=1) {
        randomPalettes[i].style.backgroundColor = colorGenerator();
    }
}

setRandomColors();



// Funcao para selecionar a cor (INCOMPLETA) 
function selectColor() { 
    let paletteColors = document.querySelectorAll('.color') 

    paletteColors.addEventListener("click", function(){
    for (let i = 0; i < paletteColors.length; i+=1) {

    }
    })
}
// Fim da Paleta de cores;

function createGrid(input) {
    let gridSize = input * input;
    let board = document.getElementById("pixel-board");
    for (let i = 0; i < gridSize; i+=1){
        let squares = document.createElement('div');
        squares.className = 'pixel'
        board.appendChild(squares);
    }
}
createGrid(5);

function selectColors() {
    let colors = document.getElementById("color-palette");
    colors.addEventListener ("click", function(event){
    for (let i = 0; i < colors.children.length; i+=1){
        colors.children[i].classList.remove('selected')
    }
    event.target.classList.add("selected")
    })
}
selectColors();

function paintPixels () {
    let pixel = document.querySelectorAll(".pixel")
    for (let i = 0; i < pixel.length; i+=1) {
        pixel[i].addEventListener("click", function(event){
        let selectedColor = document.querySelector(".selected");
        event.target.style.backgroundColor = selectedColor.style.backgroundColor;
        })
    }
}
paintPixels();

function clearBoard() {
    let pixel = document.querySelectorAll(".pixel")
    let button = document.getElementById("clear-board");
    button.addEventListener("click", function(){
        for (let i = 0; i < pixel.length; i+=1) {
            pixel[i].style.backgroundColor = "white"
        }
    })
}

clearBoard();