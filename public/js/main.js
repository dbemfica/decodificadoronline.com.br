document.getElementById("btnDecodificar").addEventListener("click", function(){
  let input = document.getElementById('input').value;
  let tentativas = parseInt(document.getElementById('tentativas').value);
  alert(input);
  alert(tentativas);

  let results = [];
  results.push(base64(input));

  let table = document.getElementById('table-result');
  table.classList.remove('d-none');
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = "Base64:";
  cell2.innerHTML = base64(input);

  row = table.insertRow(1);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);

  cell1.innerHTML = "Base64:";
  cell2.innerHTML = base64(input);
});
