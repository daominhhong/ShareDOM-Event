document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".container img");
    document.addEventListener("scroll", debounceFn(function () {
        const windowScrollTop = window.pageYOffset;
        [...images].forEach((item) => {
            const imageOffsetTop = item.offsetTop;
            const imageHeight = item.clientHeight;
            /// so sanh toa do thanh cuon + chieu cao cua man hinh 
            // voi vi tri Top cua hinh + (chieu cao cua hinh / 2)
            if ((windowScrollTop + document.documentElement.clientHeight) > (imageOffsetTop + imageHeight / 2))
                item.classList.add("active");
            else
                item.classList.remove("active");
        });
    }, 50));
    function debounceFn(func, wait, immediate) {
        let timeout;
        return function () {
            let context = this,
                args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
});