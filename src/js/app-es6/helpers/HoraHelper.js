class HoraHelper {

    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }


    static getDuration(hora) {
        let m = moment(hora, 'HH:mm');

        return moment.duration({
            minutes: m.minutes(),
            hours: m.hours()
        })
    }

    static getHoraString(duration) {

        if (!duration) {
            return this.getDuration("00:00");
            //throw new Error("Milissegundos não pode ser vazio");
        }

        let horaFull = (duration.asHours() < 0 ? duration.asHours() * -1 : duration.asHours())
        let hours = Math.trunc(horaFull);
        let minutes = Math.round((horaFull % 1) * 60);

        if (hours.toString().length == 1) {
            hours = "0" + hours;
        }
        if (minutes.toString().length == 1) {
            minutes = "0" + minutes;
        }
        return duration.asMilliseconds() < 0 ? `-${hours}:${minutes}` : `${hours}:${minutes}`;

    }

    static getDiferencaHora(horaInicio, horaFim) {

        return horaFim - horaInicio;
    }
}

export default HoraHelper;