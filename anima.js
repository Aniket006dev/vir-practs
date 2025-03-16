document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.container h3, #title h1,.card,.labcard,.lc,.cont,.faq-item'); // Select elements to animate

    const applyAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the animation class and force a reflow to reset the animation
                entry.target.classList.remove('animate');
                void entry.target.offsetHeight; // Trigger reflow
                entry.target.classList.add('animate');
            }
        });
    };

    // Create an observer to watch elements entering the viewport
    const observer = new IntersectionObserver(applyAnimation, { threshold: 0.2});

    // Attach observer to each element
    animatedElements.forEach(element => observer.observe(element));
});
