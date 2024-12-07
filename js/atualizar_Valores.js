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

function updateTimeAndDate() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();

    // Hora atual formatada (HH:MM:SS)
    const timeString = now.toLocaleTimeString();

    // Data atual formatada (Ex: Segunda-feira, 7 de Dezembro de 2024)
    const dateString = now.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Atualizar a hora e a data a cada segundo
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();

