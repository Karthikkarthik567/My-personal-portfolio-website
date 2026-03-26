// ─── SIDEBAR TOGGLE ───────────────────────────────────────
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
    sidebar.classList.remove('close-sidebar');
    sidebar.classList.add('open-sidebar');
    if (overlay) overlay.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('open-sidebar');
    sidebar.classList.add('close-sidebar');
    if (overlay) overlay.classList.remove('active');
});

if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open-sidebar');
        sidebar.classList.add('close-sidebar');
        overlay.classList.remove('active');
    });
}

// Close sidebar when a link is clicked
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open-sidebar');
        sidebar.classList.add('close-sidebar');
        if (overlay) overlay.classList.remove('active');
    });
});

// ─── PROJECT VIDEO HOVER PLAY ──────────────────────────────
const projectVidBoxes = document.querySelectorAll('.project-vidbox');

projectVidBoxes.forEach(box => {
    const video = box.querySelector('video');
    const hoverSign = box.querySelector('.hover-sign');

    if (video) {
        box.addEventListener('mouseenter', () => {
            video.play();
            if (hoverSign) hoverSign.classList.add('active');
        });

        box.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            if (hoverSign) hoverSign.classList.remove('active');
        });

        // Also handle touch for mobile
        box.addEventListener('touchstart', () => {
            video.play();
            if (hoverSign) hoverSign.classList.add('active');
        });
    }
});

// ─── HEADER SCROLL EFFECT ─────────────────────────────────
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ─── SCROLL DOWN BUTTON ────────────────────────────────────
const scrollDown = document.querySelector('.scroll-down');

if (scrollDown) {
    scrollDown.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// ─── ACTIVE NAV LINK HIGHLIGHT ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// ─── AUTO BLUR (Intersection Observer) ─────────────────────
const autoBlurElements = document.querySelectorAll('.autoBlur');

const blurObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

autoBlurElements.forEach(el => blurObserver.observe(el));

// ─── AUTO DISPLAY (Intersection Observer) ──────────────────
const autoDisplayElements = document.querySelectorAll('.autoDisplay');

const displayObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
});

autoDisplayElements.forEach(el => displayObserver.observe(el));

// ─── FADE IN LEFT (Intersection Observer) ──────────────────
const fadeinLeftElements = document.querySelectorAll('.fadein-left');

const fadeLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

fadeinLeftElements.forEach(el => fadeLeftObserver.observe(el));

// ─── TYPING EFFECT (optional hero text) ────────────────────
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ─── AOS INIT ──────────────────────────────────────────────
AOS.init({
    once: false,
    mirror: true,
    offset: 80,
    duration: 800,
    easing: 'ease-out-cubic'
});