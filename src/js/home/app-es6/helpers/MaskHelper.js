class MaskHelper {

    constructor() {
        //Adicionado o SELF como o THIS do MaskHelper, pois,
        //na chamada foi do evento, foi feito um BIND do pontoControler, ou seja,
        //quando usamos THIS dentro do método, ele se refere ao contexto PontoController
        let self = this;

        self._eventoDoElemento;
        self._elemento;
    }

    static mask(evento) {
        self._eventoDoElemento = evento;
        self._elemento = evento.target;
        self._elemento.value = MaskHelper._hora24(self._elemento.value);
    };


    static _hora24(valor) {

        let chave = self._eventoDoElemento.keyCode == 229 ? valor.slice(-1) : self._eventoDoElemento.key;
        //Se já estiver preenchido com a hora certa
        //Não insere e retorna o que está no campo
        if (valor.length > 5) {
            return valor.slice(0, -1);
        }

        //Valida se tem caracteres diferentes de Números
        valor = valor.replace(/\D/g, "");

        //Valida se é o primeiro elemento e
        //se o que está sendo passado, é um número válido
        if (valor.length == 1 && !/[0-2]/.test(chave)) {
            self._eventoDoElemento.preventDefault();
            valor = '';
            return valor;
        }

        //valida as seguintes regras:
        //1- É o segundo elemento?
        //2- O primeiro elemento é o algarismo 2?
        //3- O que está sendo digitado, é um número de 0 a 3?
        //Obs.: essa regra foi criada para evitar horas inválidas (24,25,29, por exemplo);
        if (valor.length == 2 && /([2])/.test(valor.substring(0, 1)) && !/([0-3])/.test(chave)) {
            return valor.slice(0, -1);
        }

        //Valida se o terceiro digito é de 0 a 5
        if (valor.length == 3 && !/([0-5])/.test(chave)) {
            return valor.slice(0, -1);
        }

        //Valida se está no último digito
        if (valor.length == 4) {
            //Cancela o evento, para não duplicar o valor a ser enviado no campo
            self._eventoDoElemento.preventDefault();
            //debugger;
            //Se o valor a ser enviado é um número
            if (/(\d)/.test(chave)) {
                //insere a mascara de hora
                valor = valor.replace(/([0-2]\d)([0-5]\d)/g, "$1:$2");
            }

        }

        //retorna o valor
        return valor;
    }
}

export default MaskHelper;