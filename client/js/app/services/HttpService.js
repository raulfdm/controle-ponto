class HttpService {


    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            //Abre a Requisicao
            xhr.open('GET', url);
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
                        resolve(JSON.parse(xhr.responseText));

                    } else {
                        console.log(`Status: ${xhr.status} - Corpo: ${xhr.responseText}`);
                        reject(xhr.responseText);
                    }
                }
            }
            xhr.send();
        })
    }

    post(url, dado) {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            
            xhr.send(JSON.stringify(dado.toString()));
            //xhr.send(JSON.stringify(dado));
        })
    }


}