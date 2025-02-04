// ملف show-icons.js
document.addEventListener('DOMContentLoaded', function () {
    const exploreBtn = document.getElementById('explore-btn');
    const hiddenIcons = document.getElementById('hidden-icons');

    exploreBtn.addEventListener('click', function (e) {
        e.preventDefault(); // منع الانتقال إلى رابط
        hiddenIcons.classList.toggle('visible'); // إظهار أو إخفاء الأيقونات
    });
});