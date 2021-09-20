const L1 = document.getElementById('L1');
const L2 = document.getElementById('L2');
const L3 = document.getElementById('L3');
const L4 = document.getElementById('L4');
const L5 = document.getElementById('L5');

function criacoluna (quadradao){

for (i=0; i<5; i+=1){
  const coluna= document.createElement('div');
  coluna.className='pixel';
  quadradao.appendChild(coluna)
}
}


criacoluna(L1)
criacoluna(L2)
criacoluna(L3)
criacoluna(L4)
criacoluna(L5)]

let selecionacor = 