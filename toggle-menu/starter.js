const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const html = document.documentElement;

function menuShow() {
    menu.classList.toggle("is-show");
    menuToggle.classList.toggle("fa-times");
    menuToggle.classList.toggle("fa-bars");
}

menuToggle.addEventListener("click", menuShow);
// menuToggle.addEventListener("click", (event) => {
//     event.stopPropagation();
// });

// menu.addEventListener("click", (event) => event.stopPropagation());

html.addEventListener("click", (event) => {
    // // cach 1
    // if (menu.className.includes("is-show"))
    //     menuShow();
    // cach 2
    // console.log(menu.contains(event.target));
    // console.log(event.target.matches(".menu-toggle"));
    if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
        menu.classList.remove("is-show");
        menuToggle.classList.remove("fa-times");
        menuToggle.classList.add("fa-bars");
    }
});