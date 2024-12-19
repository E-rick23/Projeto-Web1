document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle-dark-mode");
    let isManualToggle = false; // Variável para rastrear alternância manual

    // Função para alternar o modo escuro
    function toggleDarkMode(isDarkMode) {
        document.body.classList.toggle("dark-mode", isDarkMode);
        toggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }

    // Verifica a hora atual
    function checkTimeForDarkMode() {
        if (isManualToggle) return; // Não executa se o usuário alternou manualmente
        const now = new Date();
        const hours = now.getHours();
        const isDarkMode = hours >= 17 || hours < 5; // Ativa o modo escuro após as 17:30 ou antes das 5:30
        toggleDarkMode(isDarkMode);
    }

    // Alternar manualmente
    toggleButton.addEventListener("click", function() {
        isManualToggle = true; // Define que o modo foi alternado manualmente
        const isDarkMode = !document.body.classList.contains("dark-mode");
        toggleDarkMode(isDarkMode);
    });

    // Ativar o modo escuro automaticamente com base no horário
    checkTimeForDarkMode();
});
