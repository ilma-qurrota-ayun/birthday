const themeButton = document.getElementById("theme-button"),
    darkTheme = "dark-theme",
    iconTheme = "ri-sun-line",
    selectedTheme = localStorage.getItem("selected-theme"),
    selectedIcon = localStorage.getItem("selected-icon"),
    getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light",
    getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
selectedTheme && (document.body.classList["dark" === selectedTheme ? "add" : "remove"](darkTheme), themeButton.classList["ri-moon-line" === selectedIcon ? "add" : "remove"](iconTheme)), themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme), themeButton.classList.toggle(iconTheme), localStorage.setItem("selected-theme", getCurrentTheme()), localStorage.setItem("selected-icon", getCurrentIcon())
});
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});
sr.reveal(".profile__greater", {
    delay: 500
}), sr.reveal(".profile__border"), sr.reveal(".profile__name", {
    delay: 500
}), sr.reveal(".profile__profession", {
    delay: 600
}), sr.reveal(".profile__social", {
    delay: 700
}), sr.reveal(".profile__info-group", {
    interval: 100,
    delay: 700
}), sr.reveal(".filters__content", {
    delay: 900
}), sr.reveal(".filters", {
    delay: 1e3
});