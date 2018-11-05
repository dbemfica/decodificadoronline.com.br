function cifraCesar(string, chave) {

  const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','t','s','t','u','v','w','x','y','z'];
  let result = '';

  for(let i = 0; i < string.length; i++){
    let letra = string.charAt(i);
    for(let x = 0; x < alfabeto.length; x++){
      if(letra.toLowerCase() === alfabeto[x]){
        result += alfabeto[x-chave];
        break;
      }
    }
  }
  return result;
}
