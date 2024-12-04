document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const preloader = document.getElementById("preloader");
        const content = document.getElementById("content");
        preloader.style.display = "none";
        content.style.display = "bloc";
    }, 1000);
});




const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');

        if (content.classList.contains('open')) {
            content.classList.remove('open');
            icon.textContent = '+';
        } else {
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
            document.querySelectorAll('.accordion-header .icon').forEach(i => i.textContent = '+');
            content.classList.add('open');
            icon.textContent = '-';
        }
    });
});