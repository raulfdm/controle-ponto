/*var people = [{
    id: 1,
    nome: "Angrboda",
    data: "2013-05-07"
}, {
    id: 2,
    nome: "Bjorn",
    data: "210-01-01"
}, {
    id: 3,
    nome: "Ubbe",
    data: "2013-05-07"
}, {
    id: 4,
    nome: "Sigurd",
    data: "2013-05-07"
}];
*/

/*console.log(people.reduce(function(filtro, objeto) {
    //console.log(filtro, objeto);
    return filtro.add(objeto);
}, []));*/


/*var filtro = [*/
/*    {},
    {}
];*/

//Spread operator, transforma cada letra da string em uma posição do array
let w1 = [...
    'PalavRA'
];
let w2 = [...
    'Palavra'
];

function validaString(palavra1, palavra2) {
    //verifica se elas tem o mesmo tamanho
    //Poderia validar se elas são iguais dando um upper ou lower, etc.
    if (palavra1.length == palavra2.length) {

        //Usa o reduce para fazer a comparação.
        let verificacao = palavra1.reduce(function(resultado, atual, indice) {

            //Regex, só pra validar se é maiscula ou não
            let regex = /[A-Z]/;

            //valida se a letra atual é correspondente à letra no mesmo índice no array
            if (atual !== palavra2[indice]) {

                //Verifica se a letra atual do array1 é maíscula
                if (regex.test(atual)) {
                    //se for, concatena com o valor de resultado (que é '')
                    return resultado + atual;
                } else {
                    //se não, retorna a letra maíscula do outro array
                    return resultado + palavra2[indice];
                }

            }
            //retorna a variável que guarda o resultado
            return resultado;
        }, '');

        //Se a variavel for false, retorna a mensagem de erro.
        if (verificacao) {
            return `Você digitou "${verificacao}" Maísculo, por favor verifique!`;
        }
    }

}


let resultado = validaString(w1, w2);

console.log(resultado);