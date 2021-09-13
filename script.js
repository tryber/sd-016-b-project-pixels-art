window.onload = function setSelectColorBlack(){
    let color = document.getElementsByClassName("color")
    color[0].classList.add("selected")
    for (index = 1; index < color.length; index += 1){
        if (color[index].classList == "selected"){
            color[index].classList.remove("selected")
            color[0].classList.add("selected")
        }
    }

}

let color = document.getElementsByClassName('color');
let colorPalette = document.getElementById('color-palette');

colorPalette.addEventListener('click', function clicker(event) {
    for (let i = 0; i < color.length; i += 1) {
        color[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
})

let colorSelected = "black"
function setColorSelected (color){
    colorSelected = color
}

function setPixelColour(pixel){
    pixel.style.backgroundColor = colorSelected
}

function clearPixels(){
    let pixels = document.querySelectorAll('.pixel')
    for (index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'white'
    }
}