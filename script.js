window.onload= function () {
    
    // Requisito 1, 2 e 3

    const colors = ["black", "red", "yellow", "blue"];
    let colorsPalette = document.getElementById("color-palette");

    function createColors (colors) {
        for (let i = 0; i < colors.length; i ++) {
            let color = document.createElement("div");
            color.className = "color";
            color.style.backgroundColor = colors[i];
            colorsPalette.appendChild(color);
        }
    }
    
    createColors (colors);

    // Requisito 4

    let numberOfPixelBoard = 25;
    let pixelBoard = document.getElementById("pixel-board");

    function generatePixelBoard (size) {
        for (let i = 1; i <= size; i++ ) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixelBoard.appendChild(pixel);
        }
    }

    generatePixelBoard(numberOfPixelBoard);

    // Requisito 5 cumprido no style.css

    // Requisito 6

    let listOfColors = document.getElementsByClassName("color");
    
    function selectInitialColor (color) {
        for (i = 0; i < listOfColors.length; i ++) {
            if (listOfColors[i].style.backgroundColor === color) {
                listOfColors[i].classList.add("selected");
            }
        }
    }
    
    selectInitialColor("black");

    // Requisito 7 e 8

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains("color")) {
                for (i = 0; i < listOfColors.length; i++) {
                    listOfColors[i].classList.remove("selected");
                }
                event.target.classList.add("selected");
        } else if (event.target.classList.contains("pixel")) {
            let newColor = document.getElementsByClassName("selected")[0];
            event.target.style.backgroundColor = newColor.style.backgroundColor;
        }
    }, false);

    // Requisito 9

    let clearButton = document.getElementById("clear-board");
    let pixels = document.getElementsByClassName("pixel");
    
    clearButton.addEventListener("click", function () {
        for (i = 0; i < pixels.length; i ++) {
            pixels[i].style.backgroundColor = "white";
        }
    })
}