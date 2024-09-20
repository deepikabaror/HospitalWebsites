// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Feedback Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const feedbackTextarea = document.querySelector('#feedback textarea');
    const feedbackButton = document.createElement('button');

    feedbackButton.textContent = 'Submit Feedback';
    feedbackButton.classList.add('button');
    feedbackTextarea.after(feedbackButton);

    feedbackButton.addEventListener('click', function() {
        const feedbackText = feedbackTextarea.value.trim();

        if (feedbackText === '') {
            alert('Please provide your feedback before submitting.');
        } else if (feedbackText.length < 10) {
            alert('Feedback must be at least 10 characters long.');
        } else {
            alert('Thank you for your feedback!');
            feedbackTextarea.value = ''; // Clear feedback after submission
        }
    });
});

