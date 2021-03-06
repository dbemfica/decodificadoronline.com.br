var processos = document.getElementById('processos');
var table = document.getElementById('table-result');
var numero_processo = document.getElementById('numero_processo');
var total_processos = document.getElementById('total_processos');

//EVENTO DE CLICK DO BOTAO DECODIFICAR
document.getElementById("btnDecodificar").addEventListener("click", function(){
  let input = document.getElementById('input').value;
  let tentativas = parseInt(document.getElementById('tentativas').value);

  table.innerHTML = "";

  main(input, tentativas);
});


//FUNCAO PARA CRIAR UM SLEEP PARA A ANINACAO DE DECODIFICANDO
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//FUNÇÃO USADA PARA CHAMAR AS OUTRAS FUNCOES DECODIFICADORAS
async function main(input, tentativas) {

  //INICIA AS VARIAVIES DO DOM
  processos.classList.remove('d-none');
  numero_processo.innerHTML = 1;
  total_processos.innerHTML = 3 + tentativas;

  table.classList.remove('d-none');

  //MANIPUACAO DO DOM MAIS EXECULTAR A FUNCAO base64
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = "Base64:";
  cell2.innerHTML = base64(input);

  await sleep(2000);

  //MANIPUACAO DO DOM MAIS EXECULTAR A FUNCAO reverse
  row = table.insertRow(1);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);

  cell1.innerHTML = "Reverse:";
  cell2.innerHTML = invertido(input);

  await sleep(2000);

  //MANIPUACAO DO DOM MAIS EXECULTAR A FUNCAO base64 + reverse
  row = table.insertRow(2);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);

  cell1.innerHTML = "Base64 + Reverse:";
  cell2.innerHTML = base64(invertido(input));

  await sleep(2000);

  //MANIPUACAO DO DOM MAIS EXECULTAR A FUNCAO cifraCesar COM AS TENTATIVAS
  let x = 0;
  for(let i = 1; i <= tentativas; i++){

    numero_processo.innerHTML = x+2;
    row = table.insertRow(x+3);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);

    cell1.innerHTML = "Cifra de César ("+(i)+"):";
    cell2.innerHTML = cifraCesar(input,i);

    await sleep(2000);
    x++;
  }
  processos.classList.add('d-none');
}
