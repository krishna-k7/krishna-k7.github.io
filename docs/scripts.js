document.addEventListener('DOMContentLoaded', () => {
    const webpages = document.querySelectorAll('.webpage');
    webpages.forEach((webpage, index) => {
        setTimeout(() => {
            webpage.style.opacity = 1;
            webpage.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
