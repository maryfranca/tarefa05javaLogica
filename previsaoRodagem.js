


gasolina = parseFloat(prompt("Coloque quantos litros de gasolina tem no seu carro, estimativa de 2km/ 1 litro:\n"))

function previsaoRodagem() {
    rodagem = gasolina * 2;
    window.alert("Você ainda pode rodar" + rodagem + "km");
}
previsaoRodagem()