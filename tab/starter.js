const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
function removeActive() {
    tabItems.forEach(item => item.classList.remove("active"));
}

function contentActive(value) {
    [...tabContents].forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("data-tab") === value)
            item.classList.add("active");
    })
}

[...tabItems].forEach((item) => {
    item.addEventListener("click", (event) => {
        removeActive();
        event.target.classList.add("active");
        contentActive(event.target.dataset.tab);
    });
});
