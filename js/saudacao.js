let saudacaoBase = ""; // Variável para armazenar a saudação inicial

        function mostrarSaudacao() {
            const horas = new Date().getHours();
            if (horas < 12) {
                saudacaoBase = "Bom dia";
            } else if (horas < 18) {
                saudacaoBase = "Boa tarde";
            } else {
                saudacaoBase = "Boa noite";
            }
            atualizarSaudacao(); // Atualiza o texto exibido
        }

        function atualizarSaudacao(nome = "") {
            const saudacaoElement = document.getElementById("saudacao");
            saudacaoElement.textContent = nome ? `${saudacaoBase}, ${nome}!` : saudacaoBase;
        }

        function inserirNome() {
            const nome = prompt("Digite seu nome:");
            if (nome) {
                atualizarSaudacao(nome); // Atualiza a saudação com o nome
            }
        }

        // Chama a função para exibir a saudação ao carregar a página
        mostrarSaudacao();