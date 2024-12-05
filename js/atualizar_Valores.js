let luminosidadeAtual = "Apagado";

function atualizarTemperatura(valor) {
    const temperaturaElemento = document.getElementById("temperatura");
    temperaturaElemento.textContent = `Temperatura atual do ambiente: ${valor}°C`; //nao precisa de aspas
}

function atualizarUmidade(valor) {
    const umidadeElemento = document.getElementById("umidade");
    umidadeElemento.textContent = `Umidade atual do ambiente: ${valor}%`; //nao precisa de aspas
}

function atualizarLuminosidade() {
    luminosidadeAtual = luminosidadeAtual === "Apagado" ? "Aceso" : "Apagado";

    const luminosidadeElemento = document.getElementById("luminosidade");
    luminosidadeElemento.textContent = `Luminosidade atual do ambiente: ${luminosidadeAtual}`;
}

document.getElementById("toggle-luminosidade").addEventListener("click", atualizarLuminosidade);

function atualizarLED(valor) {
    const LEDElemento = document.getElementById("led");
    LEDElemento.textContent = `Estado do LED: ${valor}`; // usar valor entre aspas tipo atualizarLED("ligado")
}
