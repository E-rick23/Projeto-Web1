document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle-dark-mode");

    function aplicarModoEscuroAutomatico() {
        const horas = obterHoraAtual(); // Reutiliza a função do saudacao.js
        if (horas >= 17 || horas < 6) {
            document.body.classList.add("dark-mode");
            toggleButton.textContent = "Light Mode";
        } else {
            document.body.classList.remove("dark-mode");
            toggleButton.textContent = "Dark Mode";
        }
    }

    // Listener para alternar manualmente
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = 
            document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Aplica o modo escuro automaticamente ao carregar a página
    aplicarModoEscuroAutomatico();

    // Atualiza o modo escuro automaticamente ao mudar a hora (opcional)
    setInterval(aplicarModoEscuroAutomatico, 60 * 1000); // Verifica a cada minuto
});
