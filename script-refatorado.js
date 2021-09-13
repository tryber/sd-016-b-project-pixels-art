window.onload = function() {

  function addPixel(pai) {
    const el = document.createElement('div');
    el.className = 'pixel';
    pai.appendChild(el);
  }

  function createBoard(tamanho) {
    for (let i = 0; i < tamanho; i++) {
      const line = document.createElement('div');
      for (let j = 0; j < tamanho; j++) {
        addPixel(line);
      }
      const board = document.getElementById('pixel-board');
      board.appendChild(line);
    }
  }

  function clearBoard() {
    document.getElementById('pixel-board').innerHTML = '';

  }

  document.getElementById('generate-board').addEventListener('click', function() {
    clearBoard();
    const input = document.querySelector('input')
    const value = parseInt(input.value)
    createBoard(value)
  })

  document.getElementById('clear-board').addEventListener('click', clearBoard);





  createBoard(input);









}