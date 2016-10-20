import Ponto from '../models/Ponto';
import RegistroPonto from '../models/RegistroPonto';
import HttpService from './HttpService';

class PontoService {

    constructor() {
        this._http = new HttpService();
        this._urlPonto = 'https://controle-ponto-cc043.firebaseio.com/pontos.json';
    }

    obterPontos() {
        let idUser = firebase.auth().currentUser.uid;
        let urlFiltroUsuario = `${this._urlPonto}?orderBy="id_usuario"&equalTo="${idUser}"`;
        var userId = firebase.auth().currentUser.uid;

        return new Promise((resolve, reject) => {
            firebase.database().ref(`/pontos/${idUser}/`).once('value')
                .then(snapshot => {
                    let pontos = snapshot.val();
                    let listaPontos = [];
                    let ponto;
                    for (let idPonto in pontos) {
                        ponto = pontos[idPonto];
                        listaPontos.push(
                            new RegistroPonto(
                                ponto._data_registro,
                                idPonto
                            ))
                    }                    
                    resolve(listaPontos);
                })
                .catch(error => reject(error))
        })

    }

    salvarRegistro(registro) {
        let idUser = firebase.auth().currentUser.uid;
        return new Promise((resolve, reject) => {
            firebase.database().ref('/pontos/').child(idUser).push(registro)
                .then(res => {
                    resolve("Sucess");
                }).catch(error => {
                    reject(error);
                })
        })


        /*return new Promise((resolve, reject) => {
            this._http.post(this._urlPonto, registro)
                .then(mensagem => resolve(mensagem)).catch(erro => {
                    console.log(erro);
                    reject('Não foi possível salvar os dados no banco!');
                })
        });*/
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