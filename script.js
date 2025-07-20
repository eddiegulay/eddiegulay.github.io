document.addEventListener('DOMContentLoaded', () => {
    const poetryLines = [
        "The world is quiet here.",
        "A soft melody from an unseen place.",
        "Ripples spreading on a silent pond.",
        "Like walking through a forest at dawn.",
        "A brushstroke frozen mid-motion.",
        "Stones arranged in a garden of thought.",
    ];

    const poetryElement = document.getElementById('poetry-line');
    let poetryIndex = 0;

    function showNextPoetryLine() {
        // Remove animation to reset it
        poetryElement.classList.remove('animate-poetry');
        
        // Change text
        poetryElement.textContent = poetryLines[poetryIndex];
        poetryIndex = (poetryIndex + 1) % poetryLines.length;

        // Force reflow to restart animation
        void poetryElement.offsetWidth; 
        
        // Add animation class back
        poetryElement.classList.add('animate-poetry');
    }

    // Show the first line immediately
    showNextPoetryLine();

    // Change the line every 30 seconds (to match animation duration)
    setInterval(showNextPoetryLine, 30000);

    // Typewriter effect for micro-intro
    const typewriterLines = [
        "Free spirit. Systems thinker.",
        "Software engineer—AI & data.",
        "Research-driven; always learning.",
        "Minimalist by philosophy, not trend.",
        "Drawn to Japanese, Chinese, Korean design—clarity in form.",
        "Poetry. Music. Nature as teacher.",
        "Fascinated by the human brain—the original interface."
    ];
    const typewriterElement = document.getElementById('typewriter-text');
    let lineIndex = 0;

    function typeLine() {
        if (!typewriterElement) return;

        let charIndex = 0;
        const line = typewriterLines[lineIndex];
        typewriterElement.textContent = ''; // Clear previous line

        const typingInterval = setInterval(() => {
            if (charIndex < line.length) {
                typewriterElement.textContent += line.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                // Wait for a bit, then move to the next line
                setTimeout(() => {
                    lineIndex = (lineIndex + 1) % typewriterLines.length;
                    typeLine();
                }, 2500); // Pause before typing next line
            }
        }, 70); // Typing speed
    }
    
    // Start typing after the initial scene animation
    setTimeout(typeLine, 4500);

    // Animate micro-intro lines
    const microLines = document.querySelectorAll('.micro-intro .micro-lines-wrapper p');
    microLines.forEach((line, idx) => {
        line.classList.add('fade-in-line');
        line.style.animationDelay = `${4 + idx * 1.2}s`;
    });

    // Remove scene0 overlay after fadeOut
    const scene0 = document.getElementById('scene0');
    if (scene0) {
        scene0.addEventListener('animationend', (e) => {
            if (e.animationName === 'fadeOutScene0') {
                scene0.remove();
            }
        });
    }

    // About Section Carousel
    const track = document.querySelector('.about-carousel-track');
    const cards = Array.from(track.children);
    const nextButton = document.getElementById('next-card');
    const prevButton = document.getElementById('prev-card');
    let currentIndex = 0;
    const cardWidth = cards[0]?.getBoundingClientRect().width || 0;

    const moveToCard = (targetIndex) => {
        if (!track) return;
        track.style.transform = 'translateX(-' + targetIndex * 100 + '%)';
        currentIndex = targetIndex;
    };

    if(nextButton && prevButton){
        nextButton.addEventListener('click', () => {
            const nextIndex = (currentIndex + 1) % cards.length;
            moveToCard(nextIndex);
        });
    
        prevButton.addEventListener('click', () => {
            const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
            moveToCard(prevIndex);
        });
    }

    // Auto-advance carousel
    setInterval(() => {
        if(document.hasFocus()){ // only advance if tab is active
            const nextIndex = (currentIndex + 1) % cards.length;
            moveToCard(nextIndex);
        }
    }, 7000); // Change card every 7 seconds
});