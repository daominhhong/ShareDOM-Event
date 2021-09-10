window.addEventListener("load", function () {
    const input = document.querySelector(".input");
    if (input) {
        input.addEventListener("input", handleValidEmail);
        function handleValidEmail(e) {
            /// nen tim cac regex tren mang cho chinh xac
            const value = e.target.value;
            const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            /// loai bo khoang trang trong luc kiem tra 
            if (regexEmail.test(value.trim())) {
                input.classList.add("valid");
                input.classList.remove("invalid");
            } else {
                input.classList.remove("valid");
                input.classList.add("invalid");
            };
            // bo icon khi input.value rong
            if (!value)
                input.classList.remove("invalid");
        }
    }
});