const template = `<div class="lightbox">
<div class="lightbox-content">
  <i class="fa fa-chevron-left" aria-hidden="true"></i>
  <img
    src= ""
    alt = ""
    class="lightbox-content__image"
  />
  <i class="fa fa-chevron-right" aria-hidden="true"></i>
</div>
</div>`;
const images = document.querySelectorAll(".content img");
let count = 0;

function setImage(value) {
    const lightboxImg = document.querySelector(".lightbox-content__image");
    lightboxImg.setAttribute("src", value);
};

[...images].forEach((item, index) => item.addEventListener("click", (e) => {
    document.body.insertAdjacentHTML("beforeend", template);
    setImage(e.target.getAttribute("src"));
    count = index;
}));

document.body.addEventListener("click", (e) => {
    if (e.target.matches(".lightbox")) {
        e.target.parentNode.removeChild(e.target);
    } else {
        if (e.target.matches(".fa-chevron-right")) {
            (count < images.length - 1) ? count++ : count = 0;
        } else if (e.target.matches(".fa-chevron-left")) {
            (count > 0) ? count-- : count = images.length - 1;
        }
        setImage(images[count].getAttribute("src"));
    }
});
//cach khac
// document.body.addEventListener("click", (e) => {
//     if (e.target.matches(".fa-chevron-right")) {
//         (count < images.length - 1) ? count++ : count = 0;
//         setImage(images[count].getAttribute("src"));
//     } else if (e.target.matches(".fa-chevron-left")) {
//         (count > 0) ? count-- : count = images.length - 1;
//         setImage(images[count].getAttribute("src"));
//     } else if (e.target.matches(".lightbox")) {
//         e.target.parentNode.removeChild(e.target);
//     }
// });
