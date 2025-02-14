document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("darkModeToggle");

    toggleSwitch.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
