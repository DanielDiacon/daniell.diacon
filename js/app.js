(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) document.documentElement.classList.toggle("menu-open");
        }));
    }
    function settingsInit() {
        if (document.querySelector("#btn-settings")) document.addEventListener("click", (function(e) {
            if (e.target.closest("#btn-settings")) document.documentElement.classList.toggle("settings-open");
        }));
        if (document.querySelector("#close-settings")) document.addEventListener("click", (function(e) {
            if (e.target.closest("#close-settings")) document.documentElement.classList.remove("settings-open");
        }));
    }
    function darkModeInit() {
        let darkMode = localStorage.getItem("darkMode");
        const lightModeToggle = document.querySelector("#light-mode-toggle");
        const darkModeToggle = document.querySelector("#dark-mode-toggle");
        const enableDarkMode = () => {
            document.body.classList.add("darkmode");
            localStorage.setItem("darkMode", "enabled");
        };
        const disableDarkMode = () => {
            document.body.classList.remove("darkmode");
            localStorage.setItem("darkMode", null);
        };
        if (darkMode === "enabled") enableDarkMode();
        darkModeToggle.addEventListener("click", (() => {
            darkMode = localStorage.getItem("darkMode");
            enableDarkMode();
        }));
        lightModeToggle.addEventListener("click", (() => {
            darkMode = localStorage.getItem("darkMode");
            disableDarkMode();
        }));
    }
    function clickToPlay() {
        document.addEventListener("DOMContentLoaded", (function() {
            var audioUrl = "img/sounds/click.wav";
            var buttons = document.querySelectorAll(".btn-sound");
            buttons.forEach((function(button) {
                button.addEventListener("click", (function() {
                    new Audio(audioUrl).play();
                }));
            }));
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    menuInit();
    settingsInit();
    darkModeInit();
    clickToPlay();
})();