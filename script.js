// Confetti Animation Function
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.id = 'confetti-container';
    confettiContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(confettiContainer);

    const colors = ['#FF1493', '#FF69B4', '#FFB6D9', '#FF69B4', '#FFD700', '#FFA500', '#FF6347'];
    const emojis = ['🎉', '💕', '❤️', '🎈', '⭐', '✨', '💖'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 30 + 10;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.5;
        const horizontalOffset = Math.random() * 400 - 200;

        confetti.innerHTML = emoji;
        confetti.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -20px;
            font-size: ${size}px;
            opacity: 1;
            animation: fall ${duration}s linear ${delay}s forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        confettiContainer.appendChild(confetti);
    }

    // Add CSS animation
    if (!document.querySelector('style[data-confetti]')) {
        const style = document.createElement('style');
        style.setAttribute('data-confetti', 'true');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Clean up after animation
    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

// Birthday Message Function
function showBirthdayMessage() {
    const messageOverlay = document.createElement('div');
    messageOverlay.id = 'birthday-overlay';
    messageOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;

    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
        text-align: center;
        background: linear-gradient(135deg, #FF1493 0%, #FFB6D9 100%);
        padding: 60px 40px;
        border-radius: 30px;
        box-shadow: 0 20px 60px rgba(255, 20, 147, 0.4);
        animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        max-width: 90%;
    `;

    messageBox.innerHTML = `
        <div style="font-size: 80px; margin-bottom: 20px; animation: bounce 1s infinite;">🎉</div>
        <h1 style="
            font-size: 4em;
            color: white;
            margin: 0;
            text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
            font-weight: 900;
            animation: slideDown 0.8s ease-out;
        ">HAPPY BIRTHDAY!</h1>
        <h2 style="
            font-size: 3em;
            color: white;
            margin: 20px 0 0 0;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        ">Trisha 💕</h2>
        <p style="
            font-size: 1.5em;
            color: white;
            margin: 30px 0 0 0;
            text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
        ">You deserve all the love in the world!</p>
        <p style="
            font-size: 1.2em;
            color: white;
            margin: 20px 0;
            text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
            font-style: italic;
        ">Made with ❤️ by Aryan</p>
        <button id="close-message" style="
            background: white;
            border: none;
            padding: 15px 40px;
            font-size: 1.2em;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            color: #FF1493;
            margin-top: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
        " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">Close</button>
    `;

    messageOverlay.appendChild(messageBox);
    document.body.appendChild(messageOverlay);

    // Add animations
    if (!document.querySelector('style[data-birthday]')) {
        const style = document.createElement('style');
        style.setAttribute('data-birthday', 'true');
        style.textContent = `
            @keyframes popIn {
                0% {
                    transform: scale(0) rotate(-10deg);
                    opacity: 0;
                }
                50% {
                    transform: scale(1.1) rotate(5deg);
                }
                100% {
                    transform: scale(1) rotate(0);
                    opacity: 1;
                }
            }
            @keyframes slideDown {
                0% {
                    transform: translateY(-50px);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            @keyframes bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Close button functionality
    document.getElementById('close-message').addEventListener('click', function() {
        messageOverlay.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => messageOverlay.remove(), 500);
    });
}

// Reveal Content Function
function revealBirthdayContent() {
    const hiddenContent = document.getElementById('hidden-content');
    const countdownSection = document.querySelector('.countdown-only');
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');
    const navMenu = document.getElementById('nav-menu');

    // Show hidden content
    hiddenContent.classList.add('show');

    // Hide countdown-only section
    countdownSection.style.display = 'none';

    // Show navbar and footer
    navbar.classList.remove('hide');
    footer.classList.remove('hide');

    // Show nav menu links
    navMenu.style.display = 'flex';

    // Trigger birthday celebration
    triggerBirthdayParty();

    // Re-enable scroll animations for revealed content
    enableScrollAnimations();
}

// Enable Scroll Animations
function enableScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('#home, #gallery, #letter').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Countdown Timer
function updateCountdown() {
    // Set the target date (August 24, 2026)
    const targetDate = new Date('August 24, 2026').getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate time units
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // If countdown is finished
    if (timeRemaining < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

        // Trigger birthday celebration - only once
        if (!window.birthdayTriggered) {
            window.birthdayTriggered = true;
            revealBirthdayContent();
        }
    }
}

// Trigger Birthday Party
function triggerBirthdayParty() {
    createConfetti();
    showBirthdayMessage();
    
    // Play sound if possible (optional)
    console.log('🎉 HAPPY BIRTHDAY TRISHA! 🎉');
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gallery image functionality
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        console.log('Gallery item clicked');
    });
});

// Add welcome message on page load
window.addEventListener('load', function() {
    console.log('🎉 Welcome to Trisha\'s Birthday Website! 🎉');
});
