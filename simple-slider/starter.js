window.addEventListener("load", function () {
    const slider = document.querySelector(".slider-main");
    const btnPrev = document.querySelector(".slider-prev");
    const btnNext = document.querySelector(".slider-next");
    const items = document.querySelectorAll(".slider-item");
    const dotItems = document.querySelectorAll(".slider-dot-item");

    function dotRemoveActive() {
        [...dotItems].forEach(item => item.classList.remove("active"));
    }
    [...dotItems].forEach((item) => item.addEventListener("click", function () {
        transformImageActive(item.dataset.index);
    }))
    // [...dotItems].forEach((item, index) => item.addEventListener("click", function () {
    //     transformImageActive(index);
    // }))
    const itemsLength = items.length;
    const sliderWidth = slider.clientWidth;
    let silderIndex = 0;
    btnNext.addEventListener("click", function () {
        silderIndex++;
        if (silderIndex > itemsLength - 1) {
            silderIndex = 0;
        }
        transformImageActive(silderIndex);
    })
    btnPrev.addEventListener("click", function () {
        silderIndex--;
        if (silderIndex < 0) {
            silderIndex = itemsLength - 1;
        }
        transformImageActive(silderIndex);
    })
    function transformImageActive(index) {
        if (isNaN(index)) return;
        silderIndex = parseInt(index);
        if (silderIndex < 0) silderIndex = 0;
        if (silderIndex > itemsLength - 1) silderIndex = itemsLength - 1;
        slider.style.transform = `translateX(${-1 * silderIndex * sliderWidth}px)`;
        dotRemoveActive();
        dotItems[silderIndex].classList.add("active");
    }
})