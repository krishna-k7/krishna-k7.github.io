// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('li');
    features.forEach(feature => {
        feature.addEventListener('click', () => {
            alert(`You clicked on ${feature.textContent}`);
        });
    });
});
