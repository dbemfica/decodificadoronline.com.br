const Conversor = {
    altariscos:{
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    },
    romanToDecimal: function(numero) {
        let r = 0;
        let ln = null;
        numero = numero.toUpperCase();
        for (let i = numero.length-1; i >= 0; i--) {
            let char = numero.charAt(i);
            for (let key in this.altariscos) {
                if( char === key){
                    let nc = parseInt(this.altariscos[key]);
                    if( ln !== null ){
                        if( nc < ln){
                            nc = nc*-1;

                        }
                    }
                    r = r+nc;
                    ln = nc;
                }
            }
        }
        return r;
    },
    decimalToRoman: function(numero) {
        let r = '';
        let divisao = 0;
        let resto = numero;
        let vetorNumeros = [1000,500,100,50,10];
        let vetorRomanos = ['M','D','C','L','X'];
        let vetorDezena = ['I','II','III','IV','V','VI','VII','VIII','IX'];

        for(let i = 0; i < vetorNumeros.length; i++){
            divisao = parseInt(resto/vetorNumeros[i]);
            resto = numero%vetorNumeros[i];
            if(divisao > 0){
                for(let x = 0; x < divisao; x++){
                    r = r+vetorRomanos[i];
                }
            }
            if (resto < 10) {
                r = r+vetorDezena[resto-1];
                break;
            }
        }
        return r;
    }
};