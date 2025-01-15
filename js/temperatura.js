const BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODING_BASE_URL = 'https://nominatim.openstreetmap.org/reverse'; // API de geocodificação do OpenStreetMap

// Função para obter informações climáticas
async function obterInformacoesClimaticas(lat, lon) {
    try {
        const response = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature,relative_humidity_2m&lang=pt`);
        if (!response.ok) throw new Error('Erro ao buscar dados da API de clima');
        const data = await response.json();

        //Adquire a umidade atual
        const agora = new Date;
        const horaAtual = agora.getHours();
        var horadaumidade = data.hourly.relative_humidity_2m[horaAtual];

        return {
            temperatura: data.current_weather.temperature,
            umidadeRelativa: horadaumidade,
            horarioAtualizacao: data.current_weather.time
        };
    } catch (error) {
        console.error('Erro ao obter informações climáticas:', error);
        return null;
    }
}

// Função para obter informações de cidade, estado e país usando geocodificação
async function obterLocalizacao(lat, lon) {
    try {
        const response = await fetch(`${GEOCODING_BASE_URL}?lat=${lat}&lon=${lon}&format=json&addressdetails=1&lang=pt-br`);
        if (!response.ok) throw new Error('Erro ao buscar dados de geocodificação');
        const data = await response.json();

        const cidade = data.address.city || data.address.town || data.address.village || 'Cidade desconhecida';
        const estado = data.address.state || 'Estado desconhecido';
        const pais = data.address.country || 'País desconhecido';

        return { cidade, estado, pais };
    } catch (error) {
        console.error('Erro ao obter localização:', error);
        return { cidade: 'Desconhecida', estado: 'Desconhecido', pais: 'Desconhecido' };
    }
}


// Adicione esta constante para definir o intervalo em milissegundos (ex.: 10 segundos)
const INTERVALO_ATUALIZACAO = 10000; // 10 segundos

async function atualizarTemperatura() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const infoClimatica = await obterInformacoesClimaticas(latitude, longitude);
            const localizacao = await obterLocalizacao(latitude, longitude);

            const elementoUmidade = document.getElementById('umidade');
            const elementoTemperatura = document.getElementById('temperatura');
            if (infoClimatica) {
                const localCompleto = `${localizacao.cidade}, ${localizacao.estado ? localizacao.estado + ', ' : ''}${localizacao.pais}`;
                elementoTemperatura.textContent = `Local: ${localCompleto} - Temperatura atual: ${(infoClimatica.temperatura+2)}°C`;
                elementoUmidade.textContent = `Umidade atual: ${infoClimatica.umidadeRelativa}`;

                // Atualiza o gráfico com a temperatura obtida
                atualizarGraficoUmidade(infoClimatica.umidadeRelativa);
                atualizarGraficoTemperatura(infoClimatica.temperatura);
            } else {
                elementoTemperatura.textContent = 'Não foi possível obter a temperatura e o local.';
            }
        }, () => {
            const elementoTemperatura = document.getElementById('temperatura');
            elementoTemperatura.textContent = 'Não foi possível acessar sua localização.';
        });
    } else {
        const elementoTemperatura = document.getElementById('temperatura');
        elementoTemperatura.textContent = 'Geolocalização não suportada.';
    }
}

// Configura o intervalo para atualizar a temperatura automaticamente
document.addEventListener('DOMContentLoaded', () => {
    atualizarTemperatura(); // Chamada inicial
    setInterval(atualizarTemperatura, INTERVALO_ATUALIZACAO);
});

