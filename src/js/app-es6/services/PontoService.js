import {Ponto} from '../models/Ponto';
import {HttpService} from './HttpService';

export class PontoService {

    constructor() {
        this._http = new HttpService();
        this._urlPonto = 'https://controle-ponto-cc043.firebaseio.com/pontos.json';
    }

    obterPontos() {        
        return new Promise((resolve, reject) => {
            this._http.get(this._urlPonto)
                .then(pontos => {
                    let listaPontos = [];
                    for (let ponto in pontos) {
                        listaPontos.push(
                            new Ponto(
                                new Date(pontos[ponto].data_cadastro),
                                pontos[ponto].hora1,
                                pontos[ponto].hora2,
                                pontos[ponto].hora3,
                                pontos[ponto].hora4,
                                pontos[ponto].hora5,
                                pontos[ponto].hora6,
                                ponto                                
                            ))                                                
                    }                    
                    resolve(listaPontos);
                }).catch(erro => {                    
                    if (/Cannot GET/.test(erro)) {
                        reject("Erro ao buscar os dados no banco");
                    } else {
                        reject(erro);
                    }
                })
        });


    }

    salvarPonto(ponto) {       
        return new Promise((resolve, reject) => {
            this._http.post(this._urlPonto, ponto)
                .then(mensagem => resolve(mensagem)).catch(erro => {
                    console.log(erro);
                    reject('Não foi possível salvar os dados no banco!');
                })
        });
    }

    apagarPonto(ponto){
        return new Promise((resolve, reject) => {
            this._http.delete(this._urlPonto, ponto)
                .then(mensagem => resolve(mensagem)).catch(erro => {
                    console.log(erro);
                    reject('Não foi possível excluir o ponto');
                })
        });
    }

}