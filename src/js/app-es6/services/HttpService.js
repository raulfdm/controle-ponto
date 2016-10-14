class HttpService {

    //Método para validar a resposta
    _handleErrors(response) {
        //Se deu erro (.ok == false), lança erro
        if (!response.ok) throw new Error(response.statusText);
        //Se não, retorna
        return response;
    }

    get(url) {
        //Uso do fetch API
        return fetch(url)
            //Valida se deu erro na requisição
            .then(response => this._handleErrors(response))
            //Se não deu erro, pega a resposta e retorna um json
            .then(response => response.json());
    }

    post(url, dado) {
        return fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(dado.toString())
        })
            .then(response => this._handleErrors(response));
    }

    delete(url, dado) {
        let envio;

        dado.forEach(function (element) {
            let hash = element._id;
            envio = {
                hash: {
                    _data_cadastro: element._data_cadastro,

                }
            }
            console.log(element);
        }, this);
        let newUrl = url.substring(0, url.length - 5) + "/" + dado[0]._id + ".json";

        return fetch(newUrl, {
            headers: { 'Content-Type': 'application/json' },
            method: 'delete'
        })
            .then(response => this._handleErrors(response));
    }
}

export default HttpService;