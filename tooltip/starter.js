window.addEventListener("load", function () {
    const text = document.querySelector(".text");

    text.addEventListener("mouseenter", (e) => {
        const cords = e.target.getBoundingClientRect();
        const tooltipText = document.createElement("div");
        tooltipText.classList.add("tooltip-text");
        tooltipText.textContent = e.target.dataset.tooltip;
        document.body.appendChild(tooltipText);
        const { top, left, width } = cords;
        const triagleHeight = 10;
        tooltipText.style.left = `${left - 0.5 * width}px`;
        tooltipText.style.top = `${top - tooltipText.offsetHeight - triagleHeight}px`;
    });
    text.addEventListener("mouseleave", () => {
        const tooltip = document.querySelector(".tooltip-text");
        if (!tooltip) return;
        tooltip.parentElement.removeChild(tooltip);
    })

})