document.addEventListener('DOMContentLoaded', function () {
    alert("Welcome! Thanks for visiting my profile.");

    const nameHeading = document.querySelector('.name');
    const colors = ['#fff176','#40c4ff', '#ffd700', '#ff80ab', '#b2ff59'];
    let colorIndex = 0;

    document.getElementById('color-btn').addEventListener('click', function () {
        nameHeading.style.transition = "color 0.8s ease-in-out";
        nameHeading.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
    // TYPING ANIMATION 
    const staticText = document.getElementById('static-text');
    const typedText = document.getElementById('typed-text');
    const phrases = ["John Ian Ormides", "a 3rd Year BSIT Student"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const style = document.createElement("style");
    style.innerHTML = `
        .blink-cursor {
            animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            // Typing
            typedText.innerHTML = currentPhrase.substring(0, charIndex + 1) + '<span class="blink-cursor">|</span>';
            charIndex++;
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200);
                return;
            }
        } else {
            // Deleting
            typedText.innerHTML = currentPhrase.substring(0, charIndex - 1) + '<span class="blink-cursor">|</span>';
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }

        // Speed control
        let progress = charIndex / currentPhrase.length;
        let baseSpeed = isDeleting ? 40 : 70;   
        let maxExtra = isDeleting ? 50 : 150;  
        let speed = baseSpeed + (progress * maxExtra);

        setTimeout(typeEffect, speed);
    }

    staticText.textContent = "Hello I'm ";
    typeEffect();
});


