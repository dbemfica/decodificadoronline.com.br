document.getElementById("btnDecodificar").addEventListener("click", function(){
  let input = document.getElementById('input').value;
  let tentativas = parseInt(document.getElementById('tentativas').value);

  main(input, tentativas);
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(input, tentativas) {

  let processos = document.getElementById('processos');
  processos.classList.remove('d-none');
  let numero_processo = document.getElementById('numero_processo');
  numero_processo.innerHTML = 1;
  let total_processos = document.getElementById('total_processos');
  total_processos.innerHTML = 1 + tentativas;

  let table = document.getElementById('table-result');
  table.classList.remove('d-none');
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = "Base64:";
  cell2.innerHTML = base64(input);

  await sleep(2000);

  for(let i = 0; i < tentativas; i++){

    numero_processo.innerHTML = i+2;
    row = table.insertRow(i+1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);

    cell1.innerHTML = "Cifra de Cesar ("+(i+1)+"):";
    cell2.innerHTML = cifraCesar(input,i);

    await sleep(2000);
  }
}
