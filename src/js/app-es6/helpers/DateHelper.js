class DateHelper {

    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }

    static textoParaData(texto) {

        return new Date(texto);
    }

    static dataParaTexto(data) {

        data = new Date(data);
        try {
            let dia = data.getDate();
            let mes = data.getMonth() + 1;
            let ano = data.getFullYear();

            if (dia.toString().length == 1) {
                dia = "0" + dia;
            }
            if (mes.toString().length == 1) {
                mes = "0" + mes;
            }

            //return `${dia}/${mes}/${ano}`;
            return `${ano}-${mes}-${dia}`;
        } catch (e) {

            console.log(e);

            throw new Error("Erro ao adicionar o ponto na lista!");


        }
    }
}

export default DateHelper;