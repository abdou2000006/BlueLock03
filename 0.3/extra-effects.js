// ملف extra-effects.js
document.addEventListener('DOMContentLoaded', function () {
    // تأثيرات إضافية للصفحة الرئيسية
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(-50px)';
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
    }, 500);

    // تأثيرات للأزرار
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 15px #64ffda';
        });
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = 'none';
        });
    });
});