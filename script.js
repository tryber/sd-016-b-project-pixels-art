const colors = document.querySelector('#color-palette');

function getColor() {
  colors.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.toggle('selected');
  });
}

getColor();

function setColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('click', () => {
      const actualColor = document.querySelector('.selected');
      console.log(actualColor);
      pixel[i].style.backgroundColor = window.getComputedStyle(actualColor).backgroundColor;
    });
  }
}

setColor();
