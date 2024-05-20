// script.js for my index for refresher act
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide lahat ng sections
            const sections = document.querySelectorAll('.portfolio-section');
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // target section na sa display
            targetSection.style.display = 'block';
        });
    });
});
// even listener ng darkmode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    // Toggle ng dark mode sa body element
    document.body.classList.toggle('dark-mode');
    
    // Save user preference ng darkmode
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check if nagdarkmode user before
const isDarkMode = localStorage.getItem('darkMode');
if (isDarkMode === 'true') {
    document.body.classList.add('dark-mode');
}
