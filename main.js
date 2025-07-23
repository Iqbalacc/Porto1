// main.js

// Inisialisasi AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Typing Animation
document.addEventListener("DOMContentLoaded", () => {
    const words = ['Web Developer', 'Freelancer', 'UI/UX Designer'];
    let i = 0,
        j = 0,
        currentWord = '',
        isDeleting = false;

    function type() {
        if (i < words.length) {
            if (!isDeleting && j <= words[i].length) {
                currentWord = words[i].substring(0, j++);
            } else if (isDeleting && j >= 0) {
                currentWord = words[i].substring(0, j--);
            }

            document.getElementById('typing').textContent = currentWord;

            if (!isDeleting && j === words[i].length) {
                isDeleting = true;
                setTimeout(type, 1000);
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
                setTimeout(type, 200);
            } else {
                setTimeout(type, 100);
            }
        }
    }

    type();

    // Dark Mode Toggle
    const toggle = document.getElementById("toggle-dark");
    const html = document.documentElement;

    // Set awal jika sudah pernah pilih
    if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
        toggle.textContent = "☀️";
    }

    toggle.addEventListener("click", () => {
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            toggle.textContent = "🌙";
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            toggle.textContent = "☀️";
        }
    });
});