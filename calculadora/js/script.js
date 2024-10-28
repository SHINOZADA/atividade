function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const amount = principal * Math.pow((1 + rate), years);
    const result = document.getElementById('result');
    result.textContent = `Montante Final: R$ ${amount.toFixed(2)}`;
}
