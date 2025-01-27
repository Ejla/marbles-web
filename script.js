// Modal functionality
function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Set up modal event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;

  // Modal setup
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modalCloseButtons = document.querySelectorAll('.modal-close');
  const modals = document.querySelectorAll('.modal');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      openModal(modal);
    });
  });

  modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          closeModal(modal);
        }
      });
    }
  });
});

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

  // Close mobile menu when clicking a navigation link
  const navLinkElements = navLinks?.querySelectorAll('a');
  navLinkElements?.forEach(link => {
      link.addEventListener('click', () => {
          if (navLinks?.classList.contains('active')) {
              navLinks.classList.remove('active');
              const spans = mobileMenuBtn.querySelectorAll('span');
              spans.forEach(span => {
                  span.style.transform = 'none';
                  span.style.opacity = '1';
              });
          }
      });
  });
});
