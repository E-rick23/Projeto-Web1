
const API_KEY = '';  // Substitua pela chave da OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const GEOCODING_BASE_URL = 'https://api.openweathermap.org/geo/1.0/reverse';

// Função para obter informações climáticas
async function obterInformacoesClimaticas(lat, lon) {
    try {
        const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`);
        if (!response.ok) throw new Error('Erro ao buscar dados da API de clima');
        const data = await response.json();
        return {
            temperatura: data.main.temp,
            cidade: data.name,
            pais: data.sys.country
        };
    } catch (error) {
        console.error('Erro ao obter informações climáticas:', error);
        return null;
    }
}

// Função para obter informações do estado usando geocoding
async function obterEstado(lat, lon) {
    try {
        const response = await fetch(`${GEOCODING_BASE_URL}?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);
        if (!response.ok) throw new Error('Erro ao buscar dados da API de geocoding');
        const data = await response.json();
        return data[0]?.state || null; // Retorna o estado se disponível
    } catch (error) {
        console.error('Erro ao obter estado:', error);
        return null;
    }
}

// Função para atualizar a exibição no HTML
async function atualizarTemperatura() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const infoClimatica = await obterInformacoesClimaticas(latitude, longitude);
            const estado = await obterEstado(latitude, longitude);

            const elementoTemperatura = document.getElementById('temperatura');
            if (infoClimatica) {
                const localCompleto = `${infoClimatica.cidade}, ${estado ? estado + ', ' : ''}${infoClimatica.pais}`;
                elementoTemperatura.textContent = `Local: ${localCompleto} - Temperatura atual: ${infoClimatica.temperatura}°C`;
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

document.addEventListener('DOMContentLoaded', atualizarTemperatura);