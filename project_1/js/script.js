// Add basic animations and interactivity
document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('.explore-button');

    // Click event for explore button
    exploreButton.addEventListener('click', () => {
        alert('Explore More coming soon!');
    });

    // Simple fade-in effect for the hero section
    const heroSection = document.querySelector('.hero');
    heroSection.style.opacity = 0;
    heroSection.style.transition = 'opacity 1.5s';

    window.addEventListener('load', () => {
        heroSection.style.opacity = 1;
    });

    // Add scroll effect to change header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#b71c1c'; // Darker red on scroll
        } else {
            header.style.backgroundColor = '#d32f2f'; // Original red color
        }
    });
});
