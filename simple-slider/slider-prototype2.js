window.addEventListener("load", function () {
    function Slider() {
        this.slider = document.querySelector(".slider-main");
        this.btnPrev = document.querySelector(".slider-prev");
        this.btnNext = document.querySelector(".slider-next");
        this.items = document.querySelectorAll(".slider-item");
        this.dotItems = document.querySelectorAll(".slider-dot-item");
        this.itemsLength = this.items.length;
        this.sliderWidth = this.slider.clientWidth;
        this.silderIndex = 0;

        [...this.dotItems].forEach((item) => item.addEventListener("click", (event) =>
            this.transformImageActive(event.target.dataset.index)));

        this.btnNext.addEventListener("click", () => this.handleChangeSlide(1));
        this.btnPrev.addEventListener("click", () => this.handleChangeSlide(-1));
    }

    new Slider();
    Slider.prototype.handleChangeSlide = function (direction) {
        if (isNaN(direction)) return;
        if (direction < 0) {
            this.silderIndex--;
        } else {
            this.silderIndex++;
        }
        this.transformImageActive(this.silderIndex);
    }

    Slider.prototype.transformImageActive = function (index) {
        if (isNaN(index)) return;
        this.silderIndex = parseInt(index);
        if (this.silderIndex < 0) {
            this.silderIndex = 0;
            return;
        }
        else if (this.silderIndex > this.itemsLength - 1) {
            this.silderIndex = this.itemsLength - 1;
            return;
        }
        this.slider.style.transform = `translateX(${-1 * this.silderIndex * this.sliderWidth}px)`;
        [...this.dotItems].forEach(item => item.classList.remove("active"));
        this.dotItems[this.silderIndex].classList.add("active");
    }
})