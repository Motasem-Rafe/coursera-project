// Show email when button is clicked
document.getElementById("contactButton").addEventListener("click", function () {
    document.getElementById("email").textContent = "john.doe@email.com";
});

// Toggle dark mode
document.getElementById("themeButton").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});