class DateHelper {

    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }

    static textoParaData(texto) {
        
        return new Date(texto);;
    }

    static dataParaTexto(data) {
        console.log(typeof data, data);
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

    }

}