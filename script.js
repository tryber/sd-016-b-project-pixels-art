window.onload = function attributeColorBlack() {
   document.getElementsByClassName("color")[0].classList.add("selected")
}
let colorList = document.querySelectorAll(".color")

function changeChoosenColor (parameter){
    let selected = document.querySelector(".selected");
        if(selected != null) {
        selected.classList.remove("selected")
        parameter.target.classList.add("selected")
        }
}
function chooseColor (){
    for(let index = 0; index < colorList.length; index++){
        colorList[index].addEventListener("click", changeChoosenColor)
    }
}
chooseColor(colorList)