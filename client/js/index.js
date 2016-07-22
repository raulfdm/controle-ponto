var campos = [
    document.querySelector('#data_cadastro'),
    document.querySelector('#hora1'),
    document.querySelector('#hora2'),
    document.querySelector('#hora5'),
    document.querySelector('#hora6'),
];

var form = document.querySelector('.form-cad-ponto').addEventListener('submit', function(event) {
    event.preventDefault();

    var tr = document.createElement('tr');
    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        
        tr.appendChild(td);
    })
    console.log(tr);
})