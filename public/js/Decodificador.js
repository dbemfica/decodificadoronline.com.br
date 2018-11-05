const Decodificador = {
    run: function(string) {
        this.base64(string);
    },
    base64: function(string) {
        let r = window.atob(string);
        console.log(r);

    }
};

Decodificador.run('ZGlvZ28=');