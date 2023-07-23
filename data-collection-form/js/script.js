const themeToggle = document.getElementById("themeToggle");
const themeStyles = document.getElementById("themeStyles");
let isDarkMode = false;

themeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    const currentTheme = isDarkMode ? "styles-dark.css" : "styles-light.css";

    document.body.style.animation = "fadeOut 0.5s ease"; // Add fadeOut animation
    themeStyles.href = `css/${currentTheme}`;

    setTimeout(() => {
        document.body.style.animation = ""; // Remove animation after switching theme
    }, 500); // Adjust the timeout duration to match the CSS animation duration
});
