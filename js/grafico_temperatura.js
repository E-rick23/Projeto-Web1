// Obtém o contexto 2D do elemento canvas com o ID 'graficoTemperatura'
const ctxTemp = document.getElementById('graficoTemperatura').getContext('2d');

// Define os dados iniciais para o gráfico de temperatura
const dataInicialTemp = {
    labels: [],
    datasets: [{
        label: 'Temperatura (°C)',
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.4
    }]
};

// Configuração geral do gráfico de temperatura
const configuracaoTemp = {
    type: 'line',
    data: dataInicialTemp,
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Horário',
                    color: pegarCorLabel()
                },
                ticks: {
                    color: pegarCorLabel()
                }
            },
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Temperatura (°C)',
                    color: pegarCorLabel()
                },
                ticks: {
                    color: pegarCorLabel()
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: pegarCorLabel()
                }
            }
        }
    }
};

// Inicializa o gráfico de temperatura
const graficoTemperatura = new Chart(ctxTemp, configuracaoTemp);

// Função para atualizar o gráfico de temperatura
function atualizarGraficoTemperatura(novoValor) {
    const atual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const novaCor = pegarCorLabel();

    // Atualizar as cores
    graficoTemperatura.options.scales.x.title.color = novaCor;
    graficoTemperatura.options.scales.y.title.color = novaCor;
    graficoTemperatura.options.plugins.legend.labels.color = novaCor;
    graficoTemperatura.options.scales.x.ticks.color = novaCor;
    graficoTemperatura.options.scales.y.ticks.color = novaCor;

    // Adicionar o novo horário no eixo X
    graficoTemperatura.data.labels.push(atual);

    // Adicionar o novo valor de temperatura no eixo Y
    graficoTemperatura.data.datasets[0].data.push(novoValor);

    // Limitar o gráfico a 10 pontos no máximo
    if (graficoTemperatura.data.labels.length > 10) {
        graficoTemperatura.data.labels.shift();
        graficoTemperatura.data.datasets[0].data.shift();
    }

    // Atualizar o gráfico
    graficoTemperatura.update();
}

