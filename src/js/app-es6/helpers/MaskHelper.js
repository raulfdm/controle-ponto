class MaskHelper {

    constructor() {
        this._eventoDoElemento;
        this._elemento;
    }

    static mask(evento) {
        this._eventoDoElemento = evento;
        this._elemento = evento.target;
        this._elemento.value = this._hora24(this._elemento.value);

    };


    static _hora24(valor) {
        let chave = this._eventoDoElemento.key;

        //Se já estiver preenchido com a hora certa
        //Não insere e retorna o que está no campo        
        if (valor.length == 5) {
            this._eventoDoElemento.preventDefault();
            return valor;
        }

        //Valida se tem caracteres diferentes de Números
        valor = valor.replace(/\D/g, "");

        //Valida se é o primeiro elemento e
        //se o que está sendo passado, é um número válido
        if (valor.length == 0 && !/[0-2]/.test(chave)) {
            this._eventoDoElemento.preventDefault();
            valor = '';
            return valor;
        }

        //valida as seguintes regras:
        //1- É o segundo elemento?
        //2- O primeiro elemento é o algarismo 2?
        //3- O que está sendo digitado, é um número de 0 a 3?
        //Obs.: essa regra foi criada para evitar horas inválidas (24,25,29, por exemplo);
        if (valor.length == 1 && /([2])/.test(valor.substring(0, 1)) && !/([0-3])/.test(chave)) {
            this._eventoDoElemento.preventDefault();
        }

        //Valida se o terceiro digito é de 0 a 5
        if (valor.length == 2 && !/([0-5])/.test(chave)) {
            this._eventoDoElemento.preventDefault();
        }

        //Valida se está no último digito
        if (valor.length == 3) {
            //Cancela o evento, para não duplicar o valor a ser enviado no campo
            this._eventoDoElemento.preventDefault();

            //Se o valor a ser enviado é um número
            if (/(\d)/.test(chave)) {
                //concatena o valor do campo com o valor enviado
                valor += chave;
                //insere a mascara de hora
                valor = valor.replace(/([0-2]\d)([0-5]\d)/g, "$1:$2");
            }

        }

        //retorna o valor
        return valor;
    }
}

export default MaskHelper;