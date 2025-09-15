document.addEventListener('DOMContentLoaded', function() {
    // Dynamic greeting based on time of day
    const greeting = document.getElementById('greeting-text');
    const hour = new Date().getHours();
    let greetingText = '';
    
    if (hour >= 5 && hour < 12) {
        greetingText = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Good Afternoon';
    } else {
        greetingText = 'Good Evening';
    }
    
    if (greeting) {
        greeting.textContent = `${greetingText}, Welcome to my Profile!`;
    }
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    const nameHeading = document.querySelector('.name');
    const colors = ['var(--accent-color)', '#f472b6', '#a78bfa', '#fb923c', '#4ade80'];
    let colorIndex = 0;
    
    document.getElementById('color-btn').addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        nameHeading.style.transition = 'background 0.5s ease';
        
        const isDarkMode = !document.body.classList.contains('light-theme');
        const endColor = isDarkMode ? '#ffffff' : '#0f172a';
        nameHeading.style.background = `linear-gradient(90deg, ${colors[colorIndex]} 0%, ${endColor} 100%)`;
        nameHeading.style.webkitBackgroundClip = 'text';
        nameHeading.style.webkitTextFillColor = 'transparent';
        nameHeading.style.backgroundClip = 'text';
    });
    
    // Theme toggle (dark mode is default)
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;
    const icon = themeBtn.querySelector('i');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    
    themeBtn.addEventListener('click', function() {
        console.log('Theme button clicked');
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            console.log('Switching to light theme');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            console.log('Switching to dark theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validateForm() {
        let isValid = true;
        
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }
        
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        }
        
        return isValid;
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
});


