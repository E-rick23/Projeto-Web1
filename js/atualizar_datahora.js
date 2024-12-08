
function updateTimeAndDate() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();

    // Hora atual formatada (HH:MM:SS)
    const timeString = now.toLocaleTimeString();

    // Data atual formatada (Ex: Segunda-feira, 7 de Dezembro de 2024)
    const dateString = now.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Atualizar a hora e a data a cada segundo
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();

