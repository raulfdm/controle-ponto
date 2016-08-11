class PontoService {

    constructor() {
        this._http = new HttpService();
    }

    obterPontos() {

        return new Promise((resolve, reject) => {
            this._http.get('/ponto')
                .then(pontos => {
                    console.log(pontos);                    
                    resolve(pontos.map(objeto => new Ponto(
                        new Date(objeto.data_cadastro),
                        objeto.hora1,
                        objeto.hora2,
                        objeto.hora3,
                        objeto.hora4,
                        objeto.hora5,
                        objeto.hora6,                        
                        objeto.id)                                  
                ));
                }).catch(erro => {                    
                    if (/Cannot GET/.test(erro)) {
                        reject("Erro ao buscar os dados no banco");
                    } else {
                        reject(erro);
                    }
                })
        });


    }

    salvarPonto(ponto){
        return new Promise((resolve, reject) => {
            this._http.post('/ponto', ponto)
                .then(mensagem => resolve(mensagem)).catch(erro => {                    
                    console.log(erro);
                    reject('Não foi possível salvar os dados no banco!');                    
                })
        });
    }

}