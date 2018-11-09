function cifraCesar(string, chave) {

  const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const excecao = [' ','1','2','3','4','5','6','7','8','9','0','/','.',':'];
  let result = '';

  for(let i = 0; i < string.length; i++){

    let letra = string.charAt(i);
    if(excecao.indexOf(letra) !== -1){
      result += letra;
    }else{
      for(let x = 0; x < alfabeto.length; x++){
        if(letra.toLowerCase() === alfabeto[x]){
          let index = x-chave;
          if(index < 0){
            index = alfabeto.length+index;
          }
          result += alfabeto[index];
          break;
        }
      }
    }
  }
  return result;
}
