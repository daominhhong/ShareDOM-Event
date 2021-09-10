window.addEventListener("load", function () {
    const progress = document.querySelector(".progress");
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
    /// cach 1: lay ti le cua width so voi height  de tinh width cuar progress khi scroll
    // const { width, height } = document.body.getBoundingClientRect();
    // const windowInnerHeight = window.innerHeight;
    // const ratio = width / (height - windowInnerHeight);
    /// cach 2: su dung ti le cua scrollHeight so voi height de tinh "%" width cua Progess 
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(height);
    window.addEventListener("scroll",
        debounceFn(function () {
            console.log(window.pageYOffset);
            // progress.style.width = `${window.pageYOffset * ratio}px`;
            progress.style.width = `${window.pageYOffset / height * 100}%`;
        }, 50));
});