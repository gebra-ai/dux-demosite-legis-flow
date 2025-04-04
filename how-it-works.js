document.addEventListener('DOMContentLoaded', () => {
    // Process navigation functionality
    const processTabs = document.querySelectorAll('.process-tab');
    const processSteps = document.querySelectorAll('.process-step');
    const stepDots = document.querySelectorAll('.step-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentStep = 1;
    const totalSteps = processSteps.length;

    // Initialize animations for the first step
    startStepAnimation(1);

    // Function to update the active step
    function updateActiveStep(stepNumber) {
        // Update tabs
        processTabs.forEach(tab => {
            if (parseInt(tab.dataset.step) === stepNumber) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // Update step content
        processSteps.forEach(step => {
            if (parseInt(step.dataset.step) === stepNumber) {
                step.classList.add('active');
                // Start animation for this step
                startStepAnimation(stepNumber);
            } else {
                step.classList.remove('active');
            }
        });

        // Update step indicators
        stepDots.forEach(dot => {
            if (parseInt(dot.dataset.step) === stepNumber) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update navigation buttons
        prevBtn.disabled = stepNumber === 1;
        nextBtn.disabled = stepNumber === totalSteps;
        
        // Update current step tracker
        currentStep = stepNumber;
    }

    // Function to start animations for a specific step
    function startStepAnimation(stepNumber) {
        // Reset any ongoing animations first
        const allAnimations = document.querySelectorAll('.step-animation > div');
        allAnimations.forEach(anim => {
            anim.classList.remove('animate');
        });
        
        // Get the current step's animation element
        const currentStepElement = document.querySelector(`.process-step[data-step="${stepNumber}"]`);
        if (currentStepElement) {
            const animationElement = currentStepElement.querySelector('.step-animation > div');
            if (animationElement) {
                // Add a small delay before starting the animation
                setTimeout(() => {
                    animationElement.classList.add('animate');
                }, 300);
            }
        }
    }

    // Event listeners for tabs
    processTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const stepNumber = parseInt(tab.dataset.step);
            updateActiveStep(stepNumber);
        });
    });

    // Event listeners for step dots
    stepDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const stepNumber = parseInt(dot.dataset.step);
            updateActiveStep(stepNumber);
        });
    });

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            updateActiveStep(currentStep - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            updateActiveStep(currentStep + 1);
        }
    });

    // Expandable cards functionality
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            card.classList.toggle('expanded');
            
            // Update button text and icon
            if (card.classList.contains('expanded')) {
                button.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                button.innerHTML = 'Learn More <i class="fas fa-chevron-down"></i>';
            }
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentStep > 1) {
            updateActiveStep(currentStep - 1);
        } else if (e.key === 'ArrowRight' && currentStep < totalSteps) {
            updateActiveStep(currentStep + 1);
        }
    });
    
    // Removed: Auto-advance code that was updating steps automatically
    // This allows users to control the navigation at their own pace
});
