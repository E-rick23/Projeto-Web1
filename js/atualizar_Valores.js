
function atualizarTemperatura(valor) {
    const temperaturaElemento = document.getElementById("temperatura");
    temperaturaElemento.textContent = `Temperatura atual do ambiente: ${valor}°C`; //nao precisa de aspas
}

function atualizarUmidade(valor) {
    const umidadeElemento = document.getElementById("umidade");
    umidadeElemento.textContent = `Umidade atual do ambiente: ${valor}%`; //nao precisa de aspas
}

function atualizarLED(valor) {
    const LEDElemento = document.getElementById("led");
    LEDElemento.textContent = `Estado do LED: ${valor}`; // usar valor entre aspas tipo atualizarLED("ligado")
}

function atualizarTempoData() {
    const tempoElemento = document.getElementById("time");
    const dataElemento = document.getElementById("date");

    const agora = new Date();

    // Hora atual formatada (HH:MM:SS)
    const tempoString = agora.toLocaleTimeString();

    // Data atual formatada (Ex: Segunda-feira, 7 de Dezembro de 2024)
    const dataString = agora.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    tempoElemento.textContent = tempoString;
    dataElemento.textContent = dataString;
}

// Atualizar a hora e a data a cada segundo
setInterval(atualizarTempoData, 1000);
atualizarTempoData();

