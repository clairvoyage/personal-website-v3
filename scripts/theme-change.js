document.addEventListener("DOMContentLoaded", function (event) {
    // alert("curr theme is " + localStorage.getItem("curr_theme"));

    const theme_change_btn = document.getElementById("theme-change");
    const page_icon = document.getElementsByClassName("page-icon")[0];
    const page_icon_mini = document.getElementsByClassName("page-icon")[1];

    theme_change_btn.removeAttribute("hidden");
    set_theme();
    theme_change_btn.addEventListener("click", function() {
        change_theme();
    });

    function set_theme() {
        if(localStorage.getItem("curr_theme") === "light") {
            set_light_theme();
        }
        else if (localStorage.getItem("curr_theme") === "dark") {
            set_dark_theme();
        }
    }

    function change_theme() {
        if(localStorage.getItem("curr_theme") === "light") {
            localStorage.setItem("curr_theme", "dark");
            set_dark_theme();
        }
        else if (localStorage.getItem("curr_theme") === "dark") {
            localStorage.setItem("curr_theme", "light");
            set_light_theme();
        }
    }

    function set_light_theme() {
        set_icon();
        document.documentElement.style.setProperty("--bg-color", "#EEEDE8");
        document.documentElement.style.setProperty("--text-color", "#292626");
        document.documentElement.style.setProperty("--link-color", "#3a422a");
        document.documentElement.style.setProperty("--link-hover-bg-color", "#c1c1a5");
        document.documentElement.style.setProperty("--form-field-color", "#f6f6f2");
        document.documentElement.style.setProperty("--form-field-border", "#c9cac4");
        document.documentElement.style.setProperty("--invalid-text-color", "#ba0101");
        document.documentElement.style.setProperty("--invalid-border-color", "#ba0101");
        document.documentElement.style.setProperty("--submit-color", "#454542");
        document.documentElement.style.setProperty("--submit-background-color", "#bfbfaa");
        document.documentElement.style.setProperty("--submit-border", "#b9bab1");
    }

    function set_dark_theme() {
        set_icon();
        document.documentElement.style.setProperty("--bg-color", "#1a1a16");
        document.documentElement.style.setProperty("--text-color", "#c5c4b9");
        document.documentElement.style.setProperty("--link-color", "#a1a171");
        document.documentElement.style.setProperty("--link-hover-bg-color", "rgba(73,86,23,0.4)");
        document.documentElement.style.setProperty("--form-field-color", "#2e2e27");
        document.documentElement.style.setProperty("--form-field-border", "#0e0e0b");
        document.documentElement.style.setProperty("--invalid-text-color", "rgb(211,48,48)");
        document.documentElement.style.setProperty("--invalid-border-color", "rgba(156,21,21,0.53)");
        document.documentElement.style.setProperty("--submit-color", "#c1c1b6");
        document.documentElement.style.setProperty("--submit-background-color", "#3c3c26");
        document.documentElement.style.setProperty("--submit-border", "rgba(21,21,14,0.87)");
    }

    function set_icon() {
        let location = window.location.pathname;
        let directory = location.substring(0, location.lastIndexOf('/'));
        if(localStorage.getItem("curr_theme") === "light") {
            if (directory === "/personal-website-v3/articles") {
                page_icon.setAttribute("src", "../images/favicon.png");
                page_icon_mini.setAttribute("src", "../images/favicon.png");
            } else {
                page_icon.setAttribute("src", "images/favicon.png");
                page_icon_mini.setAttribute("src", "images/favicon.png");
            }
        }
        if(localStorage.getItem("curr_theme") === "dark") {
            if (directory === "/personal-website-v3/articles") {
                page_icon.setAttribute("src", "../images/favicon-white.png");
                page_icon_mini.setAttribute("src", "../images/favicon-white.png");
            } else {
                page_icon.setAttribute("src", "images/favicon-white.png");
                page_icon_mini.setAttribute("src", "images/favicon-white.png");
            }
        }
    }
});