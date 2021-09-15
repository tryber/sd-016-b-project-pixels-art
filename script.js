//************************************************************************************ */
// Direitos Intelectuais:
//Repositorio Avaliativo:https://github.com/tryber/sd-016-b-project-pixels-art/pull/50
//Repositorio Descritivo:https://github.com/tryber/sd-016-b-project-pixels-art/tree/tonis-torres-project-pixels-art
// https://projects.raspberrypi.org/pt-PT/projects/pixel-art/6
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1
// https://www.w3schools.com/jsref/met_document_queryselector.asp
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_remove_class
// Implementações: Tonis Alberto Torres Ferreira
// Repositório do Projeto:https://github.com/tryber/sd-016-b-project-pixels-art/pull/50
//*********************************************************************************** */

let capureELementGridContainerI;

let containerPixelBoard = document.getElementById('pixel-board');
let containerBoxInfo = document.getElementById('box-info');
let containerPaletteColor; //Variável Utilizada para Criar a Paleta Principal de Cores
let captureClassColor = document.getElementsByClassName('color');//capturas todas divs contém class color
let captureClassPixels = document.getElementsByClassName('pixel');//capturas todas divs contém class pixels
let captureBottom = document.getElementById('clear-board');
let input = document.getElementById('generate-board');


window.onload = function () {
    createPalette(); //função cria a paleta de cores MAIN 
    addListeningMainReed();//função estuta elementos da paleta de cores
    addListeningMainReedDivsPixels();//funçâo Escuta Quadrados
    startupPixels();//Função inicializa square com 25pixels
}

/*Função Cria a Paleta Principal de Cores, e adiciona as respectivas classes*/
function createPalette() {
    let line = 4;
    containerPaletteColor = document.getElementById('color-palette');
    for (let i = 0; i < line; i++) {
        if (i === 0) {
            const div = document.createElement('div');
            div.classList.add("color", "black", "selected");
            containerPaletteColor.appendChild(div);
        } else if (i === 1) {
            const div = document.createElement('div');
            div.classList.add("color", "blue");
            containerPaletteColor.appendChild(div);
        } else if (i === 2) {
            const div = document.createElement('div');
            div.classList.add("color", "yellow");
            containerPaletteColor.appendChild(div);
        } else {
            const div = document.createElement('div');
            div.classList.add("color", "green");
            containerPaletteColor.appendChild(div);
        }
    }

}

/*Seleciona coloca a class selected no elemento atual ao passo que retira o selected 
da classe antes selecionada 
*/
function addSelectedEvent(event) {
    let handleSelected = document.querySelector('.selected');
    handleSelected.classList.remove('selected');//o black inicializa com elemento selected quando clicar remove
    event.target.classList.add('selected');//e adiciona no elemento clicado 

}

/*Colocando escuta nos Elementos da Paleta de Cores */
function addListeningMainReed() {
    for (let i = 0; i < captureClassColor.length; i += 1) {
        captureClassColor[i].addEventListener("click", addSelectedEvent);
    }
}


//TRABALHAR AQUI 
/*Função Adiciona Escuta nos Quadrados */
function addListeningMainReedDivsPixels() {

    for (let i = 0; i < captureClassPixels.length; i += 1) {
        captureClassPixels[i].addEventListener("click", selectSquarePixels);

    }
}

/*************INICIO IMPLEMENTAÇÃO FUNÇÃO LIMPAR DO BOTÃO*********/
function clearBottom() {
    let clearPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < clearPixels.length; i++) {
        clearPixels[i].classList.remove('black');
        clearPixels[i].classList.remove('yellow');
        clearPixels[i].classList.remove('blue');
        clearPixels[i].classList.remove('green');
        clearPixels[i].classList.add('white');
    }
}

//Colocando escuta no Botão Limpar
captureBottom.addEventListener("click", clearBottom);


/*********** INICIO IMPLEMENTANDO FUNÇÃO DINÂMICA ************/
let buttonVqv = document.querySelector('#generate-board');

buttonVqv.addEventListener("click", function () {

    let theAmount = document.getElementById('board-size');

    if (theAmount.value !== "") {

        validateProhibited(theAmount);


        let lineAndCollum = theAmount.value;
        
        //ADICIONANDO NO CONTAINER PRINCIPAL 
        let containerPrincipalI = document.getElementById('pixel-board');
        containerPrincipalI.innerHTML = "";

        for (let i = 0; i < lineAndCollum; i += 1) {

            let recipienteDivsForJ = document.createElement('div');
            containerPrincipalI.appendChild(recipienteDivsForJ);

            for (let j = 0; j < lineAndCollum; j += 1) {
                let objectCreateDiv = document.createElement('div');
                objectCreateDiv.setAttribute("class", "pixel");
                objectCreateDiv.className += " white";
                objectCreateDiv.addEventListener("click", selectSquarePixels);
                recipienteDivsForJ.appendChild(objectCreateDiv);
            }
        }

    } else {
        return alert('Board inválido!');
    }




});

//FUNCTION VALIDAÇÃO NUMBER
function validateProhibited(nubmer) {

    let valuePattern = document.getElementById('board-size');
    let convertingNumber = parseInt(nubmer.value);
 
    if(convertingNumber<5 || convertingNumber>50){
        valuePattern.value=5;
        return alert('Valor Inválido!! Setando valor Inicial Padrao')
    }
}

//SELECIONA PIXELS 
function selectSquarePixels(event) {
    let handleSelected = document.querySelector('.selected');
    let pixelRemove = document.querySelectorAll('.white');

    for (let i = 0; i < pixelRemove.length; i++) {
        pixelRemove[i].classList.remove('white');
    }
    if (handleSelected.classList.contains('black')) {
        event.target.classList.add("black");
    } else if (handleSelected.classList.contains('blue')) {
        event.target.classList.add("blue");
    } else if (handleSelected.classList.contains('yellow')) {
        event.target.classList.add("yellow");
    } else {
        event.target.classList.add("green");
    }
}

//FALAR COM TALES COMO POSSO MELHORAR ISSO 
function startupPixels() {

    let lineAndCollum = 5;
    let containerPrincipalI = document.getElementById('pixel-board');
    containerPrincipalI.innerHTML = "";

    for (let i = 0; i < lineAndCollum; i += 1) {

        let recipienteDivsForJ = document.createElement('div');
        containerPrincipalI.appendChild(recipienteDivsForJ);

        for (let j = 0; j < lineAndCollum; j += 1) {
            let objectCreateDiv = document.createElement('div');
            objectCreateDiv.setAttribute("class", "pixel");
            objectCreateDiv.className += " white";
            objectCreateDiv.addEventListener("click", selectSquarePixels);
            recipienteDivsForJ.appendChild(objectCreateDiv);
        }
    }

}




