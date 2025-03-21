// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typed.js effect (manual implementation)
const typedText = document.querySelector('.typed-text');
const words = ['a Developer', 'a Designer', 'a Creator'];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    if (wordIndex >= words.length) wordIndex = 0;
    currentWord = words[wordIndex];

    if (!isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, 100);
        }
    } else {
        typedText.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex++;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 50);
        }
    }
}

type();
