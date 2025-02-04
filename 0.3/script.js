// ملف script.js
// يمكن إضافة تأثيرات تفاعلية هنا
document.addEventListener('DOMContentLoaded', function () {
    // مثال: إضافة تأثير عند التمرير
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
});