const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownIcon = document.querySelector(".dropdown__caret");

dropdownSelect.addEventListener("click", () => {
    showDropdown();

});

// dropdownIcon.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log(dropdownIcon);
// });

function importValue(value) {
    dropdownSelect.firstElementChild.textContent = value.firstElementChild.textContent;
    const icon = value.lastElementChild.className.replace("dropdown__icon", "dropdown__caret");
    dropdownSelect.lastElementChild.className = icon;
}
function showDropdown() {
    dropdownList.classList.toggle("show");
    // dropdownIcon.className = "fa fa-caret-down dropdown__caret";
}

[...dropdownItems].forEach((item) => item.addEventListener("click", (e) => {
    showDropdown();
    importValue(e.target);
}));

document.addEventListener("click", (e) => {
    if (!document.querySelector(".dropdown").contains(e.target)) {
        dropdownList.classList.remove("show");
    }
})