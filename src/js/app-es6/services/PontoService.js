import Ponto from '../models/Ponto';
import RegistroPonto from '../models/RegistroPonto';

class PontoService {

    constructor() {}

    obterPontos(mesAno) {

        let idUser = firebase.auth().currentUser.uid;
        let dateRange = {
            inicio: moment(new Date(mesAno.ano, mesAno.mes, 1)).format('YYYY-MM-DD'),
            fim: moment(new Date(mesAno.ano, parseInt(mesAno.mes) + 1, 0)).format('YYYY-MM-DD')
        }

        return new Promise((resolve, reject) => {
            firebase.database().ref(`/pontos/${idUser}/`)
                .orderByChild('_data_registro').startAt(dateRange.inicio).endAt(dateRange.fim)
                .once('value')
                .then(snapshot => {
                    if (!snapshot.val()) reject("0001");
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
    }

    alterarPonto(registro) {
        let idUser = firebase.auth().currentUser.uid;
        return new Promise((resolve, reject) => {
            firebase.database().ref(`/pontos/${idUser}/${registro.id}`).update(registro)
                .then(sucess => resolve('Sucess'))
                .catch(error => reject(error))
        })
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