let capturaHeader = document.querySelector('header');
let criarTitulo = document.createElement('h1');
criarTitulo.id = 'title';
criarTitulo.innerHTML = 'Paleta de Cores';
capturaHeader.appendChild(criarTitulo);

let capturarSection = document.querySelector('section');
capturarSection.id = 'color-palette';
let coresIndividuais = 4;
for (let index = 0; index < coresIndividuais; index += 1){
    let criarDivsPaleta = coresIndividuais;
    criarDivsPaleta = document.createElement('div');
    criarDivsPaleta.className = 'color';
    capturarSection.appendChild(criarDivsPaleta);
}

function colorirPaleta (){
    let configurarCoresPaletas = document.querySelectorAll('.color');
    configurarCoresPaletas[0].style.backgroundColor = 'black';
    configurarCoresPaletas[1].style.backgroundColor = 'red';
    configurarCoresPaletas[2].style.backgroundColor = 'blue';
    configurarCoresPaletas[3].style.backgroundColor = 'green';
}
colorirPaleta();

function enquandrarPixels(){
    let capturarSectionQuadro = document.querySelector('#pixel-board');
    let elementosQuadro = 25;
    for (let index = 0; index < elementosQuadro; index +=1){
        let criarDivsQuadro = elementosQuadro;
        criarDivsQuadro = document.createElement('div');
        criarDivsQuadro.className = 'pixel';
        capturarSectionQuadro.appendChild(criarDivsQuadro);      
    }
}
enquandrarPixels();


let buscarCor = 'black';
let configurarCoresPaletas = document.querySelectorAll('.color');
for (let index = 0; index < configurarCoresPaletas.length; index += 1){
    if (configurarCoresPaletas[index].style.backgroundColor === buscarCor){
        configurarCoresPaletas[index].classList.add('selected');
    }    
}

function configurarSelecao(event){
    let capturaClasseSection = document.querySelector('.selected');
    capturaClasseSection.classList.remove('selected');
    event.target.classList.add('selected');
}
for (let index = 0; index < configurarCoresPaletas.length; index += 1){
    configurarCoresPaletas[index].addEventListener('click', configurarSelecao);
}

let capturarSelect = document.querySelector('.selected');
let capturarPixels = document.querySelectorAll('.pixel');
let capturarIdColorPalette = document.querySelector('#color-palette');
for (let index = 0; index < capturarPixels.length; index += 1){
    capturarPixels[index].addEventListener('click', function(){
        if (capturarIdColorPalette.children[0].classList.contains('selected')){
            capturarPixels[index].style.backgroundColor = 'black';
        } else if (capturarIdColorPalette.children[1].classList.contains('selected')){
            capturarPixels[index].style.backgroundColor = 'red';
        } else if (capturarIdColorPalette.children[2].classList.contains('selected')) {
            capturarPixels[index].style.backgroundColor = 'blue';
        } else if (capturarIdColorPalette.children[3].classList.contains('selected')) {
            capturarPixels[index].style.backgroundColor = 'green';
        }
    });
}

let capturarBotao = document.querySelector('#botao');
let criarBotao = document.createElement('button');
criarBotao.id = 'clear-board';
criarBotao.innerHTML = 'Limpar';
capturarBotao.appendChild(criarBotao);

let botao = document.querySelector('#clear-board');
botao.addEventListener('click', function(){
    for (let index = 0; index < capturarPixels.length; index += 1){
        capturarPixels[index].style.backgroundColor = 'white';
    }
})