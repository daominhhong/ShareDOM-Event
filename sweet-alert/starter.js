window.addEventListener("load", function () {
    const buttonAlert = document.querySelector("button");
    function sweetAlertAdd(e) {
        const template = `<div class="sweet-alert">
        <i class="fa fa-check sweet-icon"></i>
        <div class="sweet-text">Conragulation you win</div>
      </div>`;
        document.body.insertAdjacentHTML("beforeend", template);
    }
    buttonAlert.addEventListener("click", function () {
        sweetAlertAdd();
        const sweetAlert = document.querySelector(".sweet-alert");
        if (sweetAlert) {
            setTimeout(function () {
                sweetAlert.parentNode.removeChild(sweetAlert);
            }, 2000);
        }
    })
})