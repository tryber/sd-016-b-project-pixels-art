//Requisito-01
console.log(document.getElementById("title").innerText = "Paleta de Cores");
const paleta = document.getElementById("color-palette");

//Cores
function generateColors() {
  const colors = ['black'];
  const palette = ['blue', 'orange', 'green', 'yellow',
    'pink', 'brown', 'grey', 'red', 'cyan', 'GoldenRod',
    'Indigo', 'magenta', 'orange', 'violet', 'Yellowgreen', 'lightpink'];
  do {
    const colorIndex = getRandomIntInclusive(0, palette.length - 1);
    const color = palette[colorIndex];
    if (colors.includes(color) === false) {
      colors.push(color);
    }
  } while (colors.length < 4);
  return colors;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// quesito 2
function createSquare(colorIndex) {
  const colors = generateColors();
  const palette = document.createElement('div');
  palette.style.backgroundColor = colors[colorIndex];
  palette.className = 'color';
  palette.addEventListener('click', () => {
    setSelectedColor(colors[colorIndex]);
    resetSelected();
    palette.className = 'color selected';
  });
  if (colorIndex === 0) {
    palette.className = 'color selected';
  }
  return palette;
}

function createPalettes(size) {
  const allPalettes = document.getElementById('color-palette');
  for (let index = 0; index < size; index += 1) {
    allPalettes.appendChild(createSquare(index));
  }
};

function buildAll() {
  createPalettes(4);
}
buildAll();