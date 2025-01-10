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

// Obtém o contexto 2D do elemento canvas com o ID 'graficoUmidade'
// Isso será usado para renderizar o gráfico
const ctx = document.getElementById('graficoUmidade').getContext('2d');

function pegarCorLabel() {
    return document.body.classList.contains('dark-mode') ? '#fff' : '#000';
}

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
                    text: 'Horário',
                    color: pegarCorLabel()
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Umidade (%)',
                    color: pegarCorLabel()
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: pegarCorLabel() // Cor das labels da legenda
                }
            }
        }
    }
};

const graficoUmidade = new Chart(ctx, configuracao);

function atualizarGraficoUmidade(novoValor) {
    const atual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const novaCor = pegarCorLabel();

    // Atualizar a cor dos labels
    graficoUmidade.options.scales.x.title.color = novaCor;
    graficoUmidade.options.scales.y.title.color = novaCor;
    graficoUmidade.options.plugins.legend.labels.color = novaCor;

    // Atualizar cores dos valores
    graficoUmidade.options.scales.x.ticks.color = novaCor;
    graficoUmidade.options.scales.y.ticks.color = novaCor;

    // Adicionar o novo horário no eixo X
    graficoUmidade.data.labels.push(atual);

    // Adicionar o novo valor de umidade no eixo Y
    graficoUmidade.data.datasets[0].data.push(novoValor);

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
    atualizarUmidade(UmidadeSimulada);
}, 2000);

// Funções para exibir os gráfico 
function exibirGrafico(containerId) {
    const graficoContainer = document.getElementById(containerId); // Obtém o contêiner pelo ID
    if (graficoContainer) {
        graficoContainer.classList.add('mostrar'); // Adiciona a classe para exibir e ajustar o tamanho
        console.log(`Exibindo gráfico no contêiner: ${containerId}`);
    } else {
        console.error(`Contêiner não encontrado: ${containerId}`);
    }
}

function ocultarGrafico(containerId) {
    const graficoContainer = document.getElementById(containerId); // Obtém o contêiner pelo ID
    if (graficoContainer) {
        graficoContainer.classList.remove('mostrar'); // Remove a classe para ocultar e ajustar o tamanho
        console.log(`Ocultando gráfico no contêiner: ${containerId}`);
    } else {
        console.error(`Contêiner não encontrado: ${containerId}`);
    }
}