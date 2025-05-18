// Modal functionality
function openModal(modal) {
  if (!modal) return;
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
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
const initMobileMenu = () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = mobileMenuBtn?.querySelector('svg');

  const toggleMenu = (isOpen) => {
    navLinks?.classList.toggle('active', isOpen);
    if (menuIcon) {
      // Toggle between hamburger and close icon
      menuIcon.innerHTML = isOpen ?
        `<path d="M18 6L6 18"></path><path d="M6 6l12 12"></path>` :
        `<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>`;
    }
  };

  const closeMenu = () => {
    toggleMenu(false);
  };

  // Toggle menu on button click
  mobileMenuBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const willBeOpen = !navLinks?.classList.contains('active');
    toggleMenu(willBeOpen);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navLinks?.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close menu when clicking navigation links
  navLinks?.querySelectorAll('a')?.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
      closeMenu();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
});
