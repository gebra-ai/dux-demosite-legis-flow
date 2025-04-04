document.addEventListener('DOMContentLoaded', function() {
    // Demo popup functionality
    const showDemoBtn = document.getElementById('show-demo-popup');
    const demoPopup = document.getElementById('demo-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const popupDemoForm = document.getElementById('popup-demo-form');
    
    // Check if elements exist before adding event listeners
    if (showDemoBtn && demoPopup && closePopupBtn) {
        // Check if first visit using localStorage
        const hasVisitedBefore = localStorage.getItem('has_visited');
        
        // If first visit, show popup after a short delay
        if (!hasVisitedBefore) {
            setTimeout(function() {
                demoPopup.classList.add('show');
                // Set flag in localStorage
                localStorage.setItem('has_visited', 'true');
            }, 2000); // 2 second delay for better UX
        }
        
        // Show popup when floating button is clicked
        showDemoBtn.addEventListener('click', function() {
            demoPopup.classList.add('show');
        });
        
        // Close popup when close button is clicked
        closePopupBtn.addEventListener('click', function() {
            demoPopup.classList.remove('show');
        });
        
        // Close popup when clicking outside the popup content
        demoPopup.addEventListener('click', function(e) {
            if (e.target === demoPopup) {
                demoPopup.classList.remove('show');
            }
        });
    }
    
    // Handle form submission if form exists
    if (popupDemoForm) {
        popupDemoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = popupDemoForm.querySelector('[name="name"]').value;
            const email = popupDemoForm.querySelector('[name="email"]').value;
            const company = popupDemoForm.querySelector('[name="company"]').value;
            
            // Here you would usually send the data to your server
            console.log('Demo requested by:', name, email, company);
            
            // Show success message
            alert('Thank you for your interest! We will contact you shortly.');
            
            // Close the popup
            demoPopup.classList.remove('show');
            
            // Reset the form
            popupDemoForm.reset();
        });
    }
    
    // Handle contact form submission if it exists
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const message = contactForm.querySelector('[name="message"]').value;
            
            // Here you would usually send the data to your server
            console.log('Contact form submitted:', name, email, message);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Optional: Scroll reveal animation
    const revealElements = document.querySelectorAll('section');
    function checkReveal() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on page load
    
    // Add hover effect for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--card-shadow)';
        });
    });
    
    // Active link highlighting based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Remove the carousel functionality since we're not using it anymore
