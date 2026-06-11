
function calcularGastos() {
    let pessoas = parseInt(document.getElementById('numPessoas').value) || 0;
    let alimentacao = parseFloat(document.getElementById('valAlimentacao').value) || 0;
    let ingresso = parseFloat(document.getElementById('valIngresso').value) || 0;
    let transporte = parseFloat(document.getElementById('valTransporte').value) || 0;


    let custoPorPessoa = alimentacao + ingresso;
    let total = (pessoas * custoPorPessoa) + transporte;


    let divResultado = document.getElementById('resultadoCalculo');

    if (pessoas < 1) {
        divResultado.innerHTML = "<p style='color: red;'>Por favor, insira pelo menos 1 pessoa no grupo.</p>";
    } else {

        let totalFormatado = total.toFixed(2).replace('.', ',');

        divResultado.innerHTML = `
                    <h3>Resumo do Passeio</h3>
                    <p>O roteiro para <strong>${pessoas} pessoa(s)</strong> custará aproximadamente:</p>
                    <div class="valor-final">R$ ${totalFormatado}</div>
                `;
    }


    divResultado.className = 'resultado-box';
}
