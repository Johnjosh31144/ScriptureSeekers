// const hamburgerMenu = document.querySelector("#hamburger-menu");
// const overlay = document.querySelector("#overlay");
// const nav1 = document.querySelector("#nav-1");
// const nav2 = document.querySelector("#nav-2");
// const nav3 = document.querySelector("#nav-3");
// const nav4 = document.querySelector("#nav-4");
// const nav5 = document.querySelector("#nav-5");
// const nav6 = document.querySelector("#nav-6");
// const nav7 = document.querySelector("#nav-7");
// const nav8 = document.querySelector("#nav-8");
// const nav9 = document.querySelector("#nav-9");
// const nav10 = document.querySelector("#nav-10");
// const nav11 = document.querySelector("#nav-11");
// const nav12 = document.querySelector("#nav-12");
// const nav13 = document.querySelector("#nav-13");
// const nav14 = document.querySelector("#nav-14");
// const nav15 = document.querySelector("#nav-15");
// const nav16 = document.querySelector("#nav-16");
// const nav17 = document.querySelector("#nav-17");
// const nav18 = document.querySelector("#nav-18");
// const nav19 = document.querySelector("#nav-19");
// const nav20 = document.querySelector("#nav-20");
// const nav21 = document.querySelector("#nav-21");
// const nav22 = document.querySelector("#nav-22");
// const nav23 = document.querySelector("#nav-23");
// const nav24 = document.querySelector("#nav-24");
// const nav25 = document.querySelector("#nav-25");
// const nav26 = document.querySelector("#nav-26");
// const nav27 = document.querySelector("#nav-27");
// const nav28 = document.querySelector("#nav-28");


// //const navItems = [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9, nav10, nav11, nav12, nav13, nav14, nav15, nav16, nav17, nav18, nav19, nav20, nav21, nav22, nav23, nav24, nav25, nav26, nav27, nav28];

// // Control Navigation Animation
// /*function navAnimation(val1, val2) {
//     navItems.forEach((nav, i) => {
//         nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
//     });
// }

// function toggleNav() {
//     // Toggle: Hamburger Open/Close
//     hamburgerMenu.classList.toggle("active");

//     //   Toggle: Menu Active
//     overlay.classList.toggle("overlay-active");

//     if (overlay.classList.contains("overlay-active")) {
//         // Animate In - Overlay
//         overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

//         // Animate In - Nav Items
//         navAnimation("out", "in");
//     } else {
//         // Animate Out - Overlay
//         overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

//         // Animate Out - Nav Items
//         navAnimation("in", "out");
//     }
// }

// // Events Listeners
// hamburgerMenu.addEventListener("click", toggleNav);
// navItems.forEach((nav) => {
//     nav.addEventListener("click", toggleNav);
// });
// */
// // Dynamically create nav items from IDs and store them in an array
// const navItems = [];
// for (let i = 1; i <= 28; i++) {
//     const navItem = document.querySelector(`#nav-${i}`);
//     if (navItem) {
//         navItems.push(navItem);
//     }
// }

// // Control Navigation Animation
// function navAnimation(val1, val2) {
//     navItems.forEach((nav, i) => {
//         // Ensure you do not attempt to replace classes that do not exist
//         if (nav.classList.contains(`slide-${val1}-${i + 1}`)) {
//             nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
//         }
//     });
// }

// function toggleNav() {
//     // Toggle: Hamburger Open/Close
//     hamburgerMenu.classList.toggle("active");

//     // Toggle: Menu Active
//     overlay.classList.toggle("overlay-active");

//     if (overlay.classList.contains("overlay-active")) {
//         // Animate In - Overlay
//         overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

//         // Animate In - Nav Items
//         navAnimation("out", "in");
//     } else {
//         // Animate Out - Overlay
//         overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

//         // Animate Out - Nav Items
//         navAnimation("in", "out");
//     }
// }

// // Events Listeners
// hamburgerMenu.addEventListener("click", toggleNav);
// navItems.forEach((nav) => {
//     nav.addEventListener("click", toggleNav);
// });
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");

// Dynamically create nav items from IDs and store them in an array
const navItems = [];
for (let i = 1; i <= 28; i++) {
    const navItem = document.querySelector(`#nav-${i}`);
    if (navItem) {
        navItems.push(navItem);
    }
}

// Control Navigation Animation
function navAnimation(val1, val2) {
    navItems.forEach((nav, i) => {
        // Ensure you do not attempt to replace classes that do not exist
        if (nav.classList.contains(`slide-${val1}-${i + 1}`)) {
            nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
        }
    });
}

function toggleNav() {
    // Toggle: Hamburger Open/Close
    hamburgerMenu.classList.toggle("active");

    // Toggle: Menu Active
    overlay.classList.toggle("overlay-active");

    if (overlay.classList.contains("overlay-active")) {
        // Animate In - Overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

        // Animate In - Nav Items
        navAnimation("out", "in");
    } else {
        // Animate Out - Overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

        // Animate Out - Nav Items
        navAnimation("in", "out");
    }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
});