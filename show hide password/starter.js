window.addEventListener("load", function () {
    const form = document.querySelector(".form");
    const password = form.querySelector(`input[type="password"]`);
    const icon = document.querySelector(".toggle");

    icon.addEventListener("click", function () {
        const input = this.previousElementSibling;
        input.setAttribute("type", "text");
    })
    icon.addEventListener("mouseleave", function () {
        const input = this.previousElementSibling;
        input.setAttribute("type", "password");
    })
})