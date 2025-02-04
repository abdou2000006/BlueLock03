// ملف scroll-animations.js
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const newLocal = 0.9;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold:0.3 // يبدأ التحريك عندما يكون 50% من العنصر مرئيًا
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});