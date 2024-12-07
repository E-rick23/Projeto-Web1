document.addEventListener("DOMContentLoaded", () => {
    const settingsMenu = document.getElementById("settings-menu");
    const openSettingsButton = document.getElementById("open-settings");
    const closeSettingsButton = document.getElementById("close-settings");

    openSettingsButton.addEventListener("click", () => {
        settingsMenu.classList.add("open");
    });

    closeSettingsButton.addEventListener("click", () => {
        settingsMenu.classList.remove("open");
    });
});
