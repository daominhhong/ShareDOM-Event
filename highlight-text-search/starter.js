window.addEventListener("load", function () {
    const input = document.querySelector(".input-search");
    const dropdownList = document.querySelector(".dropdown-list");
    let textSearch = "";
    const dropdownItems = [...document.querySelectorAll(".dropdown-item")];
    let textReplace = "";
    input.addEventListener("input", function (event) {
        textSearch = event.target.value.toLocaleLowerCase();

        dropdownItems.forEach(function (item) {
            const text = item.textContent.slice();
            let index = text.toLocaleLowerCase().indexOf(textSearch);

            if (textSearch === "") {
                dropdownList.classList.remove("active");
                textReplace = `<span class="primary">${text.slice(0, textSearch.length)}</span>${text.slice(textSearch.length)}`;
                item.innerHTML = textReplace;
            } else if (index >= 0 && text.toLocaleLowerCase().startsWith(textSearch.charAt(0))) {
                dropdownList.classList.add("active");
                textReplace = `<span class="primary">${text.slice(0, textSearch.length)}</span>${text.slice(textSearch.length)}`;
                item.innerHTML = textReplace;
            }
        });
    });
});