class ProxyFactory {

    constructor() {
        throw new Error('Classe não pode ser instanciada');
    }

    static create(object, params, act) {

        return new Proxy(object, {
            //Faz a interceptação dos métodos adiciona e esvazia
            //Isso é possível usando get porque antes de chamar uma função, o JS da um GET e depois um apply,
            //Logo, conseguimos pegar o disparo do get.
            get(target, prop, receiver) {
                /*
                Target: o objeto encapsulado -> Lista de Pontos (ListaPont())
                prop: propriedade do target (esvazia, adiciona, ou qualquer outra)
                reciever: Referencia para o Proxy 
                */

                //Valida se são os metodos 
                if (params.includes(prop) && ProxyFactory._validaFuncao(target[prop])) {

                    //retorna a função interceptada
                    return function () {
                        //reflete a função que foi chamada
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        //Disparada meu evento de atualização da view, agora já no target(Lista de Pontos); 
                        act(target);

                        return retorno;
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {

                let retorno = Reflect.set(target, prop, value, receiver);
                if (params.includes(prop)) {
                    act(target);
                }

                return retorno;

            }
        });

    }

    static _validaFuncao(funcao) {
        return typeof funcao == typeof (Function);
    }
}

export default ProxyFactory;