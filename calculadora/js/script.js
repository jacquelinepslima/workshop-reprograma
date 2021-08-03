var valorFinal = document.querySelector('.secao-hora .secao__rodape__valor span');
var ganhoMes = document.querySelector('#ganho-mes');
var ganhoHoras = document.querySelector('#horas-dia');

function calcularHoras(){
    
    var calculoHoraMes = ganhoHoras.valueAsNumber * 21

    var valorDaHora = (ganhoMes.valueAsNumber / calculoHoraMes).toFixed(2);

    valorFinal.textContent = 'R$' + valorDaHora
}


/*sintaxe da função function nomeDaFuncao(){
    alert('Olá usuário')
}

nomeDaFuncao();*/
