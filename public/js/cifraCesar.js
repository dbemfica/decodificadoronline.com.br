function cifraCesar(string, chave) {

  const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','t','s','t','u','v','w','x','y','z'];
  let result = '';

  for(let i = 0; i < string.length; i++){

    let letra = string.charAt(i);
    for(let x = 0; x < alfabeto.length; x++){
      if(letra.toLowerCase() === alfabeto[x]){
        let index = x-chave;
        if(index < 0){
          index = alfabeto.length+index;
        }
        console.log(x,' - ',chave,' = ',index);
        result += alfabeto[index];
        break;
      }
    }
    // result += letra;
  }
  return result;
}
