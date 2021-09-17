function povoaBoard(n) {
    let nPixels = n * n
    let board = document.getElementById('pixel-board')
    alteraQuadro(n, board)
    for(let i = 1; i <= nPixels; i++){
        let pixel = document.createElement('div')
        pixel.className = 'pixel'
        board.appendChild(pixel)        
    }
}
function alteraQuadro(n, quadro) {
    let largura = n * 40
    let altura = n * 40
    quadro.setAttribute("style","width:" + largura + 'px;height:' + altura +'px')
}
//Requisito 07
function setColorSelectEvent() {
    let paleta = document.getElementById('color-palette')
    let corLista = document.getElementsByClassName('color')
    paleta.addEventListener('click',function(event) {
        let id = event.target.id
        let div = document.getElementById(id)
        for(let i = 0; i < corLista.length; i++){
            if (corLista[i].id === id) {
                corLista[i].className = 'color selected'
                let cor = window.getComputedStyle(div, null).getPropertyValue('background-color')
                saveSelectedColorInSession(cor)
            } else {
                corLista[i].className = 'color'
            }
        }
    })
}
function saveSelectedColorInSession(cor) {
    if(sessionStorage.getItem('colorSelected') === null){
        sessionStorage.setItem('colorSelected', JSON.stringify([]))
    }
    sessionStorage.setItem('colorSelected', JSON.stringify(cor))
}
//Requisito 08
function setColorPaintEvent() {
   document.querySelectorAll('.pixel').forEach(pixel => {
       pixel.addEventListener('click', event => {
           let pixelCor = window.getComputedStyle(event.target, null).getPropertyValue('background-color')
           let corSelecionada = JSON.parse(sessionStorage.getItem('colorSelected'))
           if(pixelCor !== corSelecionada){
               event.target.style.backgroundColor = corSelecionada
           }           
       })
   })
}
//Requisito 09
function setClearButtonEvent() {
    let btn = document.getElementById('clear-board')
    btn.addEventListener('click', function(event) {
        let pixelLista = document.getElementsByClassName('pixel')
        for (let i = 0; i < pixelLista.length; i++) {
            pixelLista[i].style.backgroundColor = 'rgb(255, 255, 255'            
        }
    })
}
//Requisitos Bônus
//Requisito 10
function resetBoard() {
    let board = document.getElementById('pixel-board')
    let pixelList = document.querySelectorAll('.pixel')
    for (let i = 0; i < pixelList.length; i++) {
        board.removeChild(pixelList[i])
        
    }
}
function setGenerateBtnEvent() {
    let btn = document.getElementById('generate-board')
    btn.addEventListener('click', function(event) {
        let input = document.getElementById('board-size').value
        if(input < 5 || input === null){
            alert('Board Inválido!')
        }else if(input > 50){
            resetBoard()
            povoaBoard(50)
            setColorPaintEvent()
        }
        else{
            resetBoard()
            povoaBoard(input)
            setColorPaintEvent()
        }        
    })
}
//Requisito 12
function randomColorGenerate() {
    let arredonda = Math.round
    let gera = Math.random
    let max = 255
    return 'rgb(' + arredonda(gera()*max) + ', ' + arredonda(gera()*max) + ', ' + arredonda(gera()*max) +')'
}
function geraPaleta() {
    let paleta = document.querySelectorAll('.color')
    console.log(paleta);
    paleta.forEach(cor => {
        if (cor.id !== 'cor1') {
            cor.style.backgroundColor = randomColorGenerate()
        }
    })
}



window.onload = function() {
    let boardPadrao = 5
    povoaBoard(boardPadrao)
    saveSelectedColorInSession('rgb(0,0,0)')
    setColorSelectEvent()
    setColorPaintEvent()
    setClearButtonEvent()
    setGenerateBtnEvent()
    geraPaleta()
}