window.onload = function attributeColorBlack() {
   document.getElementsByClassName("color")[0].classList.add("selected")
}
let colorList = document.querySelectorAll(".color")
let pixelList = document.querySelectorAll(".pixel")
let clearButton= document.getElementById("clear-board")

function changeChoosenColor (event){
    let selected = document.querySelector(".selected");
        if(selected != null) {
        selected.classList.remove("selected")
        event.target.classList.add("selected")
        }
}
function chooseColor (){
    for(let index = 0; index < colorList.length; index++){
        colorList[index].addEventListener("click", changeChoosenColor)
    }
}
chooseColor(colorList)

function paintChoosenPixel (event) {
    let selectedColor = document.querySelector(".selected")
    let appliableColor = window.getComputedStyle(selectedColor).getPropertyValue("background-color")
    event.target.style.backgroundColor = appliableColor
}

function choosePixel (){
    for (let index = 0; index < pixelList.length; index++)
    pixelList[index].addEventListener("click", paintChoosenPixel)
}

choosePixel(colorList)

function clearPixels (){
    let clearChoosenPixel = document.querySelectorAll(".pixel")
    for (let index = 0; index < clearChoosenPixel.length; index++)
    clearChoosenPixel[index].style.backgroundColor = "white";
}

clearButton.addEventListener("click", clearPixels)