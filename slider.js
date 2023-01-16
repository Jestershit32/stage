const butLeft = document.getElementById("butLeft");
const butRight = document.getElementById("butRight");
let pole = document.querySelector(".slider__items");



const nav = document.querySelector(".slider__nav");
const navItem = nav.querySelector(".nav_item");

function createNav() {
    let navItemClone = navItem.cloneNode(true);
    nav.insertBefore(navItemClone, parent.firstElementChild);
}
for (let i = 0; i < pole.children.length - 1; i++) {
    createNav();
    nav.children[i].addEventListener("click", () => navigateon(i));
}

nav.children[pole.children.length - 1].addEventListener("click", () => navigateon(pole.children.length - 1));



function navigateon(item) {
    if (active && item + 1 != activeSlide) {
        console.log(item + " item");
        console.log(activeSlide + " activeSlide");
        active == false;
        let iter = item - activeSlide;

        let interNav = setInterval(() => {

            if (iter >= 0) {
                slideOnLeft();
            } else {
                slideOnRight();
            }
            if (activeSlide - 1 == item) {
                clearInterval(interNav);
                active == true;
            }
        }, 500)
    }
}


let activeSlide = 0;
function checkNav(position) {

    for (let i = 0; i < pole.children.length; i++) {
        nav.children[i].classList.remove('nav__on');
    }


    if (position === "left") {
        activeSlide = activeSlide - 1;

        if (activeSlide <= 0) {
            activeSlide = pole.children.length;
        }
    }
    if (position === "right") {
        activeSlide = activeSlide + 1;
        if (activeSlide > pole.children.length) {
            activeSlide = 1;
        }
    }
    // nav.children[activeSlide].classList.remove('nav__on');


    nav.children[activeSlide - 1].classList.add('nav__on');

    console.log(activeSlide);

}




let active = true;
let lastClickLeft = false;
let lastClickRight = false;

function checkLastClick() {
    if (lastClickRight) {
        slideOnRight();
        lastClickRight = false;
    } else if (lastClickLeft) {
        slideOnLeft();
        lastClickLeft = false;
    }
}


function slideOnRight() {

    let firstItem = pole.firstElementChild;
    let lastItem = pole.lastElementChild;
    let afterLastItem = pole.children[pole.children.length - 2];

    if (active) {
        checkNav("left");
        active = false;
        let right = -100;
        let onRight = 0;
        let slidRight = setInterval(() => {
            if (right === 0) {
                pole.insertBefore(lastItem, firstItem);
                active = true;
                clearInterval(slidRight);
                checkLastClick();
            }
            else {
                right = right + 1;
                onRight = onRight + 1;
                afterLastItem.style.left = right + "%"
                lastItem.style.left = onRight + "%"
            }
        }, 1)
        slidRight;

    } else {
        lastClickRight = true;
    }
}
function slideOnLeft() {
    let firstItem = pole.firstElementChild;
    let lastItem = pole.lastElementChild;

    if (active) {
        checkNav("right");
        active = false;
        let left = 100;
        let onLeft = 0;
        let slidLeft = setInterval(() => {

            if (onLeft === -100) {
                pole.appendChild(firstItem);
                active = true;
                clearInterval(slidLeft);
                checkLastClick();
            }
            else {
                left = left - 1;
                onLeft = onLeft - 1;
                firstItem.style.left = left + "%"
                lastItem.style.left = onLeft + "%"
            }
        }, 1)
        slidLeft;

    } else {
        lastClickLeft = true;
    }
}




slideOnLeft();
butRight.addEventListener("click", slideOnLeft);
butLeft.addEventListener("click", slideOnRight);








