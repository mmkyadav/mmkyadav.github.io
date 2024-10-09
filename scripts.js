// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP Animations

// Animate the header (logo and navigation links) when the page loads
gsap.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "power4.out" });
gsap.from(".nav-links li", { duration: 1, opacity: 0, y: -50, stagger: 0.2, ease: "power4.out" });

// Home section animation on load
gsap.from(".home-content h1", { duration: 1.2, opacity: 0, x: -100, ease: "power3.out" });
gsap.from(".home-content p", { duration: 1.5, opacity: 0, x: -100, delay: 0.5, ease: "power3.out" });
gsap.from(".btn", { duration: 1.5, opacity: 0, scale: 0.5, delay: 1, ease: "elastic.out(1, 0.5)" });

// Scroll-triggered animations for different sections
gsap.registerPlugin(ScrollTrigger);

// About section animation
gsap.from("#about", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power4.out"
});

// Experience section - Each block slides in with delay
gsap.from(".experience-block", {
    scrollTrigger: {
        trigger: ".experience-block",
        start: "top 90%",
    },
    opacity: 0,
    x: -100,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out"
});

// Projects section - Projects fade in and grow
gsap.from(".project", {
    scrollTrigger: {
        trigger: ".project-grid",
        start: "top 80%",
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.3,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
});

// Skills section - Each skill will slide up with a bounce effect
gsap.from(".skill", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "bounce.out"
});

// Education section - Each block fades in and slides up
gsap.from(".education-block", {
    scrollTrigger: {
        trigger: ".education-block",
        start: "top 90%",
    },
    opacity: 0,
    y: 100,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out"
});
// Certifications section - Fade in and slide up
gsap.from(".certification", {
    scrollTrigger: {
        trigger: "#certifications",
        start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out"
});


// Contact form animation on hover
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        gsap.to(input, { duration: 0.3, borderColor: "#61dafb", scale: 1.05, ease: "power2.out" });
    });
    input.addEventListener('blur', function() {
        gsap.to(input, { duration: 0.3, borderColor: "#f5f5f5", scale: 1, ease: "power2.out" });
    });
});

// Social links hover effect - buttons will pulse when hovered
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(link, { duration: 0.4, scale: 1.2, ease: "elastic.out(1, 0.75)" });
    });
    link.addEventListener('mouseleave', function() {
        gsap.to(link, { duration: 0.4, scale: 1, ease: "elastic.out(1, 0.75)" });
    });
});
