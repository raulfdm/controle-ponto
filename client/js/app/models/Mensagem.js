class Mensagem {

    constructor(mensagem='') {
        this._mensagem = mensagem;
    }


    //Getters and Setters
    set toast(mensagem = ''){
        Materialize.toast(mensagem, 4000)
    }
}