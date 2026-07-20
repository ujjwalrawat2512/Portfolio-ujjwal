// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Animation speed (ms)
    easing: 'ease-in-out', // Animation smoothing
    once: true, // Whether animation should happen only once while scrolling down
});

// Initialize Typed.js (Typing effect in Hero)
var typed = new Typed('#typing-effect', {
    strings: [
        'a Developer.',
        'a Designer.',
        'a Creative Engineer.',
        'an Animator.'
    ],
    typeSpeed: 60,    // Speed of typing
    backSpeed: 30,    // Speed of erasing
    backDelay: 1500,  // Delay before erasing starts
    loop: true,       // Loop infinite
    showCursor: true, // Show cursor
    cursorChar: '|'   // Cursor character
});