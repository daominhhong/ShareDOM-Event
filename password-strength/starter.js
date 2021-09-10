window.addEventListener("load", function () {
    const inputClass = document.querySelector(".input");

    inputClass.addEventListener("input", function (event) {
        const value = event.target.value;
        const inputWrapper = event.target.parentNode.querySelectorAll(".check-item");
        const checkLengthClass = event.target.parentNode.querySelector(".check-length");
        const checkUpperClass = event.target.parentNode.querySelector(".check-upper");
        const checkNumberClass = event.target.parentNode.querySelector(".check-number");
        const checkSpecialClass = event.target.parentNode.querySelector(".check-special");

        if (!value) {
            [...inputWrapper].forEach(item => {
                item.classList.remove("active");
                item.classList.remove("unactive");
            });
            return;
        }
        checkLength(checkLengthClass, value);
        checkRegex(checkUpperClass, value, /[A-Z]/);
        checkRegex(checkNumberClass, value, /[0-9]/);
        checkRegex(checkSpecialClass, value, /[~!@#$%^&*(){}_+[\];:,.?=<>\\\-\/ ]/);
    })
    function checkLength(checkLengthClass, value) {
        if (value.length > 8) {
            console.log(value.length);
            activeClass(checkLengthClass, "active", "unactive");
        } else {
            console.log(value.length);
            activeClass(checkLengthClass, "unactive", "active");
        }
    }
    function checkRegex(checkRegexClass, value, regex) {
        if (regex.test(value)) {
            activeClass(checkRegexClass, "active", "unactive");
        } else {
            activeClass(checkRegexClass, "unactive", "active");
        }
    }
    // function checkUpper(value, event) {
    //     const checkUpperClass = event.target.parentNode.querySelector(".check-upper");
    //     if (/[A-Z]/.test(value)) {
    //         activeClass(checkUpperClass, "active", "unactive");
    //     } else {
    //         activeClass(checkUpperClass, "unactive", "active");
    //     }
    // }
    // function checkNumber(value, event) {
    //     const checkNumberClass = event.target.parentNode.querySelector(".check-number");
    //     if (/[0-9]/.test(value)) {
    //         activeClass(checkNumberClass, "active", "unactive");
    //     } else {
    //         activeClass(checkNumberClass, "unactive", "active");
    //     }
    // }
    // function checkSpecial(value, event) {
    //     const checkSpecialClass = event.target.parentNode.querySelector(".check-special");
    //     if (/[~!@#$%^&*(){}_+[\];:,.?=<>\\\-\/ ]/.test(value)) {
    //         activeClass(checkSpecialClass, "active", "unactive");
    //     } else {
    //         activeClass(checkSpecialClass, "unactive", "active");
    //     }
    // }
    function activeClass(checkClass, activeAdd, activeRemove) {
        checkClass.classList.add(activeAdd);
        checkClass.classList.remove(activeRemove);
    }
})