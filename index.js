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