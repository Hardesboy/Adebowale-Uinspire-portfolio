document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});