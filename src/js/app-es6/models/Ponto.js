import HoraHelper from '../helpers/HoraHelper';

class Ponto {

    constructor(dataPonto, registros) {

        let pontoZerado = new Date(2016, 1, 1, 0, 0, 0);

        this._dataPonto = dataPonto;
        this._registros = registros ? registros : [];        
        //Primeiro Par
        this._entrada1 = moment.duration(moment(this._registros[0] ? this._registros[0]._data_registro : pontoZerado).format('HH:mm'));
        this._saida1 = moment.duration(moment(this._registros[1] ? this._registros[1]._data_registro : pontoZerado).format('HH:mm'));
        //Segundo Par
        this._entrada2 = moment.duration(moment(this._registros[2] ? this._registros[2]._data_registro : pontoZerado).format('HH:mm'));
        this._saida2 = moment.duration(moment(this._registros[3] ? this._registros[3]._data_registro : pontoZerado).format('HH:mm'));
        //Terceiro Par
        this._entrada3 = moment.duration(moment(this._registros[4] ? this._registros[4]._data_registro : pontoZerado).format('HH:mm'));
        this._saida3 = moment.duration(moment(this._registros[5] ? this._registros[5]._data_registro : pontoZerado).format('HH:mm'));

        this._horasDiarias = "08:00";
        this._tolerânciaDiaria = "00:10";

        Object.freeze(this);
    }

    //Methods
    _total() {
        let total = new moment.duration();
        let entrada1, entrada2, entrada3;
        let saida1, saida2, saida3;




        //Diferenças pares de hora        
        total.add(this._saida1 - this._entrada1);
        total.add(this._saida2 - this._entrada2);
        total.add(this._saida3 - this._entrada3);

        return total;
    }

    _banco() {

        let total = this._total();

        //Instaciado 2x o objeto, pois, o duration é mutável, ou seja,
        //quando é feito a operação "add" em um duration, ele altera o valor
        //E impacata no resultado da próxima operação (subtract)
        let praMais = HoraHelper.getDuration(this._horasDiarias).add(HoraHelper.getDuration(this._tolerânciaDiaria));
        let praMenos = HoraHelper.getDuration(this._horasDiarias).subtract(HoraHelper.getDuration(this._tolerânciaDiaria));

        if (total >= praMenos && total <= praMais) {
            return moment.duration({ hours: 0 });
        } else {
            return this._total().subtract(HoraHelper.getDuration(this._horasDiarias));
        }


    }

    /************Getters and Setters************/
    //Setters
    set entrada1(registro) {
        this._entrada1 = HoraHelper.getDuration(registro);
    }
    set entrada2(registro) {
        this._entrada2 = HoraHelper.getDuration(registro);
    }
    set entrada3(registro) {
        this._entrada3 = HoraHelper.getDuration(registro);
    }
    set saida1(registro) {
        this._saida1 = HoraHelper.getDuration(registro);
    }
    set saida2(registro) {
        this._saida2 = HoraHelper.getDuration(registro);
    }
    set saida3(registro) {
        this._saida3 = HoraHelper.getDuration(registro);
    }

    //Getters
    get entrada1() {
        return HoraHelper.getHoraString(this._entrada1);
    }
    get entrada2() {
        return HoraHelper.getHoraString(this._entrada2);
    }
    get entrada3() {
        return HoraHelper.getHoraString(this._entrada3);
    }
    get saida1() {
        return HoraHelper.getHoraString(this._saida1);
    }
    get saida2() {
        return HoraHelper.getHoraString(this._saida2);
    }
    get saida3() {
        return HoraHelper.getHoraString(this._saida3);
    }
    get data() {
        return moment(this._dataPonto).format('DD/MM/YYYY');
    }
    get totalFormatado() {
        return HoraHelper.getHoraString(this._total());
    }
    get total() {
        return this._total().asMilliseconds();
    }
    get bancoHorasFormatado() {
        return HoraHelper.getHoraString(this._banco());
    }
    get bancoHoras() {
        return this._banco();
    }

    toString() {
        return {
            id_ponto: this._id,
            id_usuario: this._idUsuario,
            data_registro: moment(this._dataRegistro).format()
        }
    }

}

export default Ponto;