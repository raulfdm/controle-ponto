import Ponto from '../models/Ponto';
import RegistroPonto from '../models/RegistroPonto';
import HttpService from './HttpService';

class PontoService {

    constructor() {
        this._http = new HttpService();
        this._urlPonto = 'https://controle-ponto-cc043.firebaseio.com/pontos.json';
    }

    obterPontos() {
        return new Promise((resolve, reject) => {
            this._http.get(this._urlPonto)
                .then(pontos => {
                                       
                    let listaPontos = [];
                    let ponto;

                    for (let idPonto in pontos) {
                        ponto = pontos[idPonto];
                        //console.log(ponto);
                        listaPontos.push(
                            new RegistroPonto(
                                new Date(ponto.data_registro),
                                ponto.id_usuario,
                                idPonto
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

    salvarRegistro(registro) {
        return new Promise((resolve, reject) => {
            this._http.post(this._urlPonto, registro)
                .then(mensagem => resolve(mensagem)).catch(erro => {
                    console.log(erro);
                    reject('Não foi possível salvar os dados no banco!');
                })
        });
    }

    apagarPonto(registro) {
        return new Promise((resolve, reject) => {
            this._http.delete(this._urlPonto, registro)
                .then(mensagem => resolve(mensagem)).catch(erro => {
                    console.log(erro);
                    reject('Não foi possível excluir o ponto');
                })
        });
    }
}

export default PontoService;