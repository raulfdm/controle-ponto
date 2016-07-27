class Mensagem {

    constructor(mensagem='') {
        this._mensagem = mensagem;
    }

    set toast(mensagem = ''){
        Materialize.toast(mensagem, 4000)
    }
}