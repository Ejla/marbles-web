// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = navLinks?.classList.contains('active')
            ? 'rotate(45deg) translate(5px, 5px)'
            : 'none';
        spans[1].style.opacity = navLinks?.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks?.classList.contains('active')
            ? 'rotate(-45deg) translate(7px, -7px)'
            : 'none';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && navLinks?.classList.contains('active')) {
            navLinks.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    });
});



// Form submission
const signupForm = document.getElementById('signupForm');
signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    // Here you would typically send the email to your backend
    alert('Thanks for signing up! We\'ll notify you when we launch.');
    e.target.reset();
});
