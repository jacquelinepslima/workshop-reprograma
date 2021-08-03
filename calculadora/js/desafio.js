var valorFinal = document.querySelector('#resposta')
var ganhoHora = document.querySelector('#valor-hora');
var ganhoProjeto = document.querySelector('#horas-projeto');

function calcular(){
    
    var calculoHoraMes = ganhoProjeto.valueAsNumber

    var valorDaHora = (ganhoHora.valueAsNumber * calculoHoraMes).toFixed(2);

    valorFinal.textContent = 'R$' + valorDaHora
}
