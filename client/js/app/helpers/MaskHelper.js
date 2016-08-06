class MaskHelper {
/*
Problema encontrado:
Quando é digitado várias sequencias de numero rapidamente, o timeout não consegue conter os eventos
e é possível fugir das validações :/
*/
    static mask(objeto) {
        setTimeout(this._executaMask(objeto), 0.5)
    };

    static _executaMask(objeto) {
        objeto.value = this._hora24(objeto.value);
    };

    static _hora24(valor) {        
        valor = valor.replace(/\D/g, "");

        if (valor.length == 1 && !/[0-2]/.test(valor)) {
            valor = '';
            return valor;
        }

        if (valor.length == 2 && //se o for tamanho 2
            /([2])/.test(valor.substring(0, 1)) && //se o primeiro número for 2
            !/([0-3])/.test(valor.substring(1, 2)) //se o segundo número for diferente de 0-3
        ) {
            valor = valor.substring(0, 1);
            return valor;
        }

        if (valor.length == 3 && !/([0-5])/.test(valor.substring(2, 3))) {
            valor = valor.substring(0, 2);
            return valor;
        }

        if (valor.length == 4 && !/(\d)/.test(valor.substring(3, 4))) {
            valor = valor.substring(0, 3);
            return valor;
        }

        valor = valor.substring(0, 4);
        valor = valor.replace(/([0-2]\d)([0-5][0-9])/g, "$1:$2");

        return valor;
    }
}
