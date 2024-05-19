// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous messages
    const errorElement = document.getElementById('form-error');
    errorElement.textContent = '';

    // Validation logic
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        errorElement.textContent = 'All fields are required!';
    } else if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address!';
    } else {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
