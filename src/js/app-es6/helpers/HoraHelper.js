class HoraHelper {

    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }


    static getDuration(hora) {
        let m = moment(hora,'HH:mm');

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
        
        if(duration.asMilliseconds()<0){                              
            return `-${moment.utc(duration.asMilliseconds()*-1).format('HH:mm')}`;    
        }else{
            moment.utc(duration.asMilliseconds()).format('HH:mm');
            return moment.utc(duration.asMilliseconds()).format('HH:mm');
        }
                
    }

    static getDiferencaHora(horaInicio, horaFim){
            
        return horaFim -horaInicio;
    }
}

export default HoraHelper;