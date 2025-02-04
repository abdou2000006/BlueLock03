// ملف click-sound.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn, nav ul li a'); // الأزرار وروابط القائمة

    // تحميل صوت النقر
    const clickSound = new Audio('click-sound.mp3');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickSound.play(); // تشغيل الصوت عند النقر
        });
    });
});