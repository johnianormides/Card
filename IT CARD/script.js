document.addEventListener('DOMContentLoaded', function () {
    alert("Welcome! Thanks for visiting my profile.");

    // COLOR CHANGE (On Button Click Only)
    const nameHeading = document.querySelector('.name');
    const colors = ['#e8eef6', '#fff176','#40c4ff', '#ffd700', '#ff80ab', '#b2ff59'];
    let colorIndex = 0;

    document.getElementById('color-btn').addEventListener('click', function () {
        nameHeading.style.transition = "color 0.8s ease-in-out";
        nameHeading.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });

  
    // TYPING ANIMATION (Slows Down)
    const staticText = document.getElementById('static-text');
    const typedText = document.getElementById('typed-text');
    const phrases = ["John Ian Ormides", "a 3rd Year BSIT Student"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Blinking cursor
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.marginLeft = "5px";
    cursor.style.animation = "blink 0.7s infinite";
    typedText.after(cursor);

    // Blink keyframes
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes blink { 
            50% { opacity: 0; } 
        }
    `;
    document.head.appendChild(style);

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            // Typing
            typedText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200); // pause before deleting
                return;
            }
        } else {
            // Deleting
            typedText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }

        // Speed control: start fast, slow down as it progresses
        let progress = charIndex / currentPhrase.length;
        let baseSpeed = isDeleting ? 40 : 70;   // starting speed
        let maxExtra = isDeleting ? 50 : 150;   // how much slower it can get
        let speed = baseSpeed + (progress * maxExtra);

        setTimeout(typeEffect, speed);
    }

    staticText.textContent = "Hello I'm ";
    typeEffect();
});
