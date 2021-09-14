const blackColor = document.querySelector("#black-palette");
const pixelBoard = document.querySelector("#pixel-board");
let pixelLineDiv;
const colorPalette = document.querySelector("#color-palette")
const selectedColorDiv = document.getElementsByClassName("selected");
window.onload = blackColor.classList.add("selected");
const pixel = document.getElementsByClassName("pixel");
let clearButton = document.querySelector("#clear-board")
const gridSizeButton = document.querySelector("#generate-board")
let gridSize = document.querySelector("#board-size");

function pixelLine(numero){
    for(let j = 1; j <= numero; j++){
        pixelLineDiv = document.createElement("div")
        pixelLineDiv.classList.add("pixel-line")
        pixelBoard.appendChild(pixelLineDiv);
        pixelColumn(numero);
        }
}
function pixelColumn(numero){
    for(let i = 1; i <= numero; i++){
        const individualPixel = document.createElement("div");
        individualPixel.classList.add("pixel");
        pixelLineDiv.appendChild(individualPixel);
    }
}
pixelLine(5);

function selectedPalette(){
    const palette = colorPalette.children
    for(let i =0; i< palette.length; i++){
        palette[i].addEventListener("click", function(event){
            document.querySelector(".selected").classList.remove("selected")
            event.target.classList.add("selected")
        })
    }
}
selectedPalette();


function paintPixels(){
    for(let i = 0; i < pixel.length; i++){
        pixel[i].addEventListener("click", function(event){
            const selectedColor = selectedColorDiv[0].id
            event.target.id = selectedColor;
        })
    }
}
paintPixels();

clearButton.addEventListener("click", function (){
    for(let i = 0; i < pixel.length; i++){
        pixel[i].id = ""
    }
});
gridSize.addEventListener('input', function(event){
    event.target.value = this.value; 
    //this é um comando novo para mim, achei ele nesse link do stackOverflow : https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change numa resposta do usuario Quentin. Entendi como a função funciona através do link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this 
})
gridSizeButton.addEventListener("click", function(){
    while(pixelBoard.hasChildNodes()){
        pixelBoard.removeChild(pixelBoard.lastChild)
    }
    if(gridSize.value == 0){
        window.alert("Board inválido!")
    }
    if(gridSize.value >= 50){
        gridSize.value = 50;
        pixelLine(gridSize.value)
    }
    if(gridSize.value <= 5){
        gridSize.value = 5;
        pixelLine(gridSize.value)
    }
    else {
        pixelLine(gridSize.value)
    }
    
    paintPixels()
});

// while e hasChildNodes eram novos para mim, graças ao usuário Maurice Perry no stackoverflow, achei essa simples solução. segue o link : https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div;
// entendi mais sobre o while aqui https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while;
// o hasChildNodes é auto explicativo;


//Os códigos abaixo são as alterações necessárias para a mudança de cor, porém o cypress está falando que ele erra alguns outros requisitos, portanto por hora ele ficará comentado enquanto faço os demais projetos. O Exercicio anterior também está bugando e não sei o motivo.
// function randomRgbGenerator(){
    //     let randomColor1 = Math.floor(Math.random()*255);
    //     let randomColor2 = Math.floor(Math.random()*255);
    //     var randomColor3 = Math.floor(Math.random()*255);
    //     let randomRgb = "rgb(" + randomColor1 +", "+randomColor2+", "+randomColor3+")";
    //     return randomRgb;
    // }
    // const blackColor = document.querySelector("#black-palette");
    // const pixelBoard = document.querySelector("#pixel-board");
    // const firstColor = document.querySelector("#blue-palette");
    // const secondColor = document.querySelector("#green-palette");
    // const thirdColor = document.querySelector("#pink-palette");
    // let pixelLineDiv;
    // const colorPalette = document.querySelector("#color-palette")
    // const selectedColorDiv = document.getElementsByClassName("selected");
    // window.onload = function(){
    //     blackColor.classList.add("selected");
    //     firstColor.style.backgroundColor = randomRgbGenerator();
    //     secondColor.style.backgroundColor = randomRgbGenerator();
    //     thirdColor.style.backgroundColor = randomRgbGenerator();
    
    // }
    
    // function paintPixels(){
    //     for(let i = 0; i < pixel.length; i++){
    //         pixel[i].addEventListener("click", function(event){
    //             const selectedColor = selectedColorDiv[0].style.backgroundColor
    //             event.target.style.backgroundColor = selectedColor;
    //         })
    //     }
    // }