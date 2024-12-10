// Obtém o contexto 2D do elemento canvas com o ID 'graficoUmidade'
// Isso será usado para renderizar o gráfico
const ctx = document.getElementById('graficoUmidade').getContext('2d');

// Define os dados iniciais para o gráfico, com labels (rótulos) vazios
// e um dataset para armazenar os valores da umidade
const dataInicial = {
    labels: [],
    datasets: [{
        label: 'Umidade (%)',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4
    }]
};

// Configuração geral do gráfico, incluindo tipo, dados e opções de exibição
const configuracao = {
    type: 'line',
    data: dataInicial,
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Horário'
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Umidade (%)'
                }
            }
        },
        plugins: {
            legend: {
                display: true
            }
        }
    }
};

const graficoUmidade = new Chart(ctx, configuracao);

function atualizarGraficoUmidade(newValue) {
    const atual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Adicionar o novo horário no eixo X
    graficoUmidade.data.labels.push(atual);

    // Adicionar o novo valor de umidade no eixo Y
    graficoUmidade.data.datasets[0].data.push(newValue);

    // Limitar o gráfico a 10 pontos no máximo
    if (graficoUmidade.data.labels.length > 10) {
        graficoUmidade.data.labels.shift(); // Remove o primeiro rótulo
        graficoUmidade.data.datasets[0].data.shift(); // Remove o primeiro dado
    }

    // Atualizar o gráfico
    graficoUmidade.update();
}

setInterval(() => {
    const UmidadeSimulada = Math.floor(Math.random() * 41) + 30; // Umidade aleatória entre 30% e 70%
    atualizarGraficoUmidade(UmidadeSimulada);
}, 2000);
