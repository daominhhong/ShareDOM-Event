const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

function removeContent() {
    [...accordionContents].forEach(item => item.classList.remove("is-active"));
}

[...accordionHeaders].forEach((item) => item.addEventListener("click", () => {
    const icon = item.querySelector(".icon");
    const content = item.nextElementSibling;

    // do height: auto khong transition duoc nen dung scrollHeight de thay
    // scrollheight chieu cao cua pt bao gom padding
    content.classList.toggle("is-active");
    content.style.height = `${content.scrollHeight}px`;
    if (!content.classList.contains("is-active"))
        content.style.height = `0`;

    icon.classList.toggle("fa-angle-up");
    icon.classList.toggle("fa-angle-down");
}));