document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle-dark-mode");

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = 
            document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
});