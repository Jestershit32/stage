let cookie = document.getElementById('coc');
let button = document.getElementById('btn');
setTimeout(() => {
    cookie.style.bottom = "0px";
}, 1000);

button.addEventListener('click', () => {
    cookie.style.bottom = "-300px";
    setTimeout(() => {
        cookie.style.display = "none";
    }, 1000)

}
);

const observerImg = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const phoneImg = entry.target.querySelector('.missblock__phone');
        if (entry.isIntersecting) {
            phoneImg.classList.add('missblock__animation-phone');
            return;
        }
        phoneImg.classList.remove('missblock__animation-phone');
    });
}
);
const observerText = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const phoneText = entry.target.querySelector('.missblock__content');
        if (entry.isIntersecting) {
            phoneText.classList.add('missblock__animation-content');
            return;
        }
        phoneText.classList.remove('missblock__animation-content');
    });
}
);

observerImg.observe(document.querySelector('.missblock'));
observerText.observe(document.querySelector('.missblock'));
