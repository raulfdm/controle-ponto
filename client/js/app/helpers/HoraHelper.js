class HoraHelper {

    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }


    static getMilissegundos(hora) {
        if (!hora) {
            return 0;
        }
        let hour = parseInt(hora.substring(0, 2));
        let minute = parseInt(hora.substring(3, 5));

        hour = ((hour * 60 /*minuto*/ ) * 60 /*Segundo*/ ) * 1000 /*milissegundo*/ ;
        minute = ((minute) * 60 /*Segundo*/ ) * 1000 /*milissegundo*/ ;

        return (hour + minute);
    }

    static getHoraString(milissegundos) {
        if (!milissegundos) {
            return "00:00";
            //throw new Error("Milissegundos não pode ser vazio");
        }
        let total = ((milissegundos / 1000 /*milissegundo*/ ) / 60 /*minuto*/ / 60 /*segundos*/ );

        var hour = Math.trunc(total);
        var minute = Math.trunc(((total - hour) * 60));

        if (hour.toString().length == 1) {
            hour = "0" + hour;
        }

        if (minute.toString().length == 1) {
            minute = "0" + minute;
        }
        return hour + ":" + minute;
    }


}