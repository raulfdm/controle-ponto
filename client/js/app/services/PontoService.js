class PontoService {

    constructor() {

    }

    obterPontos(callback) {

        let xhr = new XMLHttpRequest();
        //Abre a Requisicao
        xhr.open('GET', 'ponto');
        /*Configurações*/
        xhr.onreadystatechange = () => {
            /*Lista de estados possíveis:
            0. Requisição ainda não iniciada;
            1. Conexão com o sv estabelecida;
            3. processando a requisição;
            4. Requisição concluída e a resposta está ponta
            */

            if (xhr.readyState == 4) {
                if (xhr.status == 200) {

                    callback(null, JSON.parse(xhr.responseText).map(objeto => new Ponto(
                        new Date(objeto.data_cadastro),
                        objeto.hora1,
                        objeto.hora2,
                        objeto.hora3,
                        objeto.hora4,
                        objeto.hora5,
                        objeto.hora6,
                        objeto.id)));

                } else {
                    console.log(`Status: ${xhr.status} - Corpo: ${xhr.responseText}`)
                    callback('Não foi possível buscar os dados no banco! Verifique o console.', null)

                }
            }
        }
        xhr.send();
    }



}