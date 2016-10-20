import View from './View';

class BuscaPontosView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {
        return `        
            <form class="form-busca-pontos">
                <select class="browser-default" required>
                    <option value="" disabled selected>Mês</option>
                    <option value="0">Janeiro</option>
                    <option value="1">Fevereiro</option>
                    <option value="2">Março</option>
                    <option value="3">Abril</option>
                    <option value="4">Maio</option>
                    <option value="5">Junho</option>
                    <option value="6">Julho</option>
                    <option value="7">Agosto</option>
                    <option value="8">Setembro</option>
                    <option value="9">Outubro</option>
                    <option value="10">Novembro</option>
                    <option value="11">Dezembro</option>                    
                </select>
                <select class="browser-default" required>
                    <option value="" disabled selected>Ano</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>                                        
                </select>
                <button type="submit" class="btn light-blue darken-1 waves-effect waves-light btn-carregar">
                            <i class="material-icons center">loop</i>
                </button>

                <a class="btn  red darken-1 waves-effect waves-light btn-exclui">
                    <i class="material-icons center">delete</i>
                </a>
            </form>
        `
    }
}

export default BuscaPontosView;