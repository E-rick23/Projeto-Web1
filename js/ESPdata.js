async function atualizarDados() {
    try {
        const response = await fetch('http://192.168.0.100:5000/dados');
        const dados = await response.json();
        document.getElementById('luminosidade').textContent = `Luminosidade: ${dados.luminosidade}`;
        document.getElementById('temperatura').textContent = `Temperatura: ${dados.temperatura} °C`;
        document.getElementById('umidade').textContent = `Umidade: ${dados.umidade} %`;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

setInterval(atualizarDados, 5000); // Atualiza a cada 5 segundos


function atualizarLED(valor) {
    const LEDElemento = document.getElementById("led");
    LEDElemento.textContent = `Estado do LED: ${valor}`; // usar valor entre aspas tipo atualizarLED("ligado")
}