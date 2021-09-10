const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;

const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.insertAdjacentHTML("beforeend", template);
});

// document.addEventListener("click", (e) => {
//     if (e.target.matches(".modal-close")) {
//         const modal = e.target.parentNode.parentNode;
//         modal.parentNode.removeChild(modal);
//     }
//     else if (e.target.matches(".modal")) {
//         e.target.parentNode.removeChild(e.target);
//     }

// })
document.addEventListener("click", (e) => {
    if (e.target.matches(".modal-close") || e.target.matches(".modal")) {
        const modal = document.querySelector(".modal");
        modal.parentNode.removeChild(modal);
    }
})