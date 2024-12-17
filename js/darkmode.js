document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle-dark-mode");
    
    // Função para ativar/desativar o modo escuro baseado na hora
    function checkTimeForDarkMode() {
        const now = new Date();
        const hours = now.getHours();
        
        // Ativar modo escuro entre 17:30 e 5:30
        if (hours >= 17 || hours < 5) {
            document.body.classList.add("dark-mode");
            toggleButton.textContent = "Light Mode";
        } else {
            document.body.classList.remove("dark-mode");
            toggleButton.textContent = "Dark Mode";
        }
    }

    // Ativar/desativar modo escuro manualmente
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = 
            document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Checar o horário atual e definir o modo ao carregar a página
    checkTimeForDarkMode();
});
