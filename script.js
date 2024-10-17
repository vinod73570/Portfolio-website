// Select all the nav links
const navItems = document.querySelectorAll('.nav-item a');

// Add event listeners to each nav item
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        // Prevent default link behavior (optional if you want smooth scrolling)
        event.preventDefault();

        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('active'));

        // Add active class to the clicked item
        item.classList.add('active');

        // Scroll to the corresponding section
        const targetSection = document.querySelector(item.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
