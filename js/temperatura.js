
const API_KEY = '238724a7675efd6a9c5382912d45a80a';  // Substitua pela chave da OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function obterTemperatura(lat, lon) {
    try {
        const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`);
        if (!response.ok) throw new Error('Erro ao buscar dados da API');
        const data = await response.json();
        return data.main.temp; // Retorna a temperatura em Celsius
    } catch (error) {
        console.error('Erro ao obter a temperatura:', error);
        return null;
    }
}

function atualizarTemperatura() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const temperatura = await obterTemperatura(latitude, longitude);
            const elementoTemperatura = document.getElementById('temperatura');
            if (temperatura !== null) {
                elementoTemperatura.textContent = `Temperatura atual do ambiente: ${temperatura}°C`;
            } else {
                elementoTemperatura.textContent = 'Não foi possível obter a temperatura.';
            }
        }, () => {
            const elementoTemperatura = document.getElementById('temperatura');
            elementoTemperatura.textContent = 'Por favor, permita o acesso a localização para ver a temperatura da região.';
        });
    } else {
        const elementoTemperatura = document.getElementById('temperatura');
        elementoTemperatura.textContent = 'Geolocalização não suportada.';
    }
}

document.addEventListener('DOMContentLoaded', atualizarTemperatura);
