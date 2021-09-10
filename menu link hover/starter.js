window.addEventListener("load", () => {
    const links = [...document.querySelectorAll(".menu-link")];
    links.forEach(item => item.addEventListener("mouseenter", handleHoverLink));
    function handleHoverLink(event) {
        const { left, top, width, height } = event.target.getBoundingClientRect();
        const offsetBottom = 5; //khoang trang them
        line.style.top = `${top + height + offsetBottom}px`;
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
    }
    const line = document.createElement("div");
    line.classList.add("menu-line");
    document.body.appendChild(line);
    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseleave", () => line.style.width = 0);
})
