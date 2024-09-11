// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
    });

    const features = document.querySelectorAll('li');
    features.forEach(feature => {
        feature.addEventListener('click', () => {
            alert(`You clicked on ${feature.textContent}`);
        });
    });
});
