//Script do menu de configurações.

document.addEventListener("DOMContentLoaded", () => {
    const settingsMenu = document.getElementById("settings-menu");
    const openSettingsButton = document.getElementById("open-settings");
    const closeSettingsButton = document.getElementById("close-settings");

    openSettingsButton.addEventListener("click", () => {
        settingsMenu.classList.add("open"); //Ao clicar abre as configurações
    });

    closeSettingsButton.addEventListener("click", () => {
        settingsMenu.classList.remove("open"); //Ao clicar no botão de fechar, fecha o menu.
    });
});
