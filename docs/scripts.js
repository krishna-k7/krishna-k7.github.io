document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        document.querySelectorAll('.webpage').forEach(webpage => {
            webpage.classList.toggle('dark-mode');
        });
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });

    const webpages = document.querySelectorAll('.webpage');
    webpages.forEach((webpage, index) => {
        setTimeout(() => {
            webpage.style.opacity = 1;
            webpage.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
