document.getElementById("btnDecodificar").addEventListener("click", function(){
    let input = document.getElementById('input');
    let string = input.value;
    Decodificador.run(string);

    let table = document.getElementById('table-result')
    table.classList.remove('d-none');
});