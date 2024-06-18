
function calcularMedia(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const media = (num1 + num2 + num3) / 3;
    document.getElementById('resultadoMedia').innerText = `A média é: ${media.toFixed(2)}`;
}

function verificarIdade(event) {
    event.preventDefault();
    const idade = parseInt(document.getElementById('idade').value);
    const mensagem = idade < 18 ? 'Você é menor de idade.' : 'Você é maior de idade.';
    alert(mensagem);
    document.getElementById('resultadoIdade').innerText = mensagem;
}

function determinarMes(event) {
    event.preventDefault();
    const numeroMes = parseInt(document.getElementById('numeroMes').value);
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const mensagem = numeroMes >= 1 && numeroMes <= 12 ? `O mês é: ${meses[numeroMes - 1]}` : 'Número inválido. Informe um número entre 1 e 12.';
    document.getElementById('resultadoMes').innerText = mensagem;
}
