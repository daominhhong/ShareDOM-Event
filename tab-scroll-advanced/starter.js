window.addEventListener("load", function () {
    const tabItems = document.querySelectorAll(".tab-item");
    const tabPrev = document.querySelector(".tab-prev");
    const tabNext = document.querySelector(".tab-next");
    // console.log(tabItems);
    const tabList = document.querySelector(".tab-list");
    /// khoang cach ben trai cua tab-list
    const tabListLeft = tabList.offsetLeft;
    /// do rong max cua thanh scroll
    const maxScroll = tabList.scrollWidth - tabList.clientWidth;
    [...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
    function handleTabClick(event) {
        /// add and remove active
        [...tabItems].forEach((item) => item.classList.remove("active"));
        event.target.classList.add("active");
        /// check neu la item thu nhat va thu 2 thi` bo qua
        if (!event.target.previousElementSibling) return;
        if (!event.target.previousElementSibling.previousElementSibling) return;
        let spacingLeft = event.target.previousElementSibling.offsetWidth
            + event.target.previousElementSibling.previousElementSibling.offsetWidth;
        /// tinh khoang cach can sroll theo do rong cua 2 phan tu dung truoc
        let scrollRight = event.target.offsetLeft - tabListLeft - spacingLeft;

        if (scrollRight < spacing) scrollRight = 0;
        if (scrollRight >= 0)
            tabList.scroll(scrollRight, 0);
        activeButton(scrollRight, spacing);
    }
    const spacing = 100; // khoang cach tang them hoac bot di khi nhan tab-next hoac tab-prev
    let positionScroll = 0; // vi tri bat dau cua scroll 
    tabNext.addEventListener("click", function () {
        iconNextClick();
    })
    tabPrev.addEventListener("click", function () {
        iconPrevClick();
    })
    // tabList.addEventListener("wheel", debounceFn(function (event) {

    //     // console.log(delta);
    //     // this.scrollRight += delta;
    //     if (event.deltaY > 0)
    //         this.scrollLeft = this.scrollLeft + spacing;
    //     else
    //         this.scrollLeft = this.scrollLeft - spacing;

    //     console.log(this.scrollLeft);
    //     console.log(spacing);

    //     /// kiem tra khi scroll >= spacing thi hien thi tab-prev, nguoc lai thi an di
    //     activeButton(this.scrollLeft, 1);
    // }, 50));
    function iconNextClick() {
        if (positionScroll < maxScroll)
            positionScroll += spacing;
        tabList.scroll(positionScroll, 0);
        // kiem tra vi tri hien tai cua scroll de hien tabPrev va an tabNext
        if (positionScroll > 0) {
            tabPrev.classList.remove("disabled");
        }
        if (positionScroll >= maxScroll) {
            tabNext.classList.add("disabled");
        }
    }
    function iconPrevClick() {
        if (positionScroll > 0)
            positionScroll -= spacing;
        tabList.scroll(positionScroll, 0);
        // kiem tra vi tri hien tai cua scroll de hien tabPrev va an tabNext
        if (positionScroll < maxScroll) {
            tabNext.classList.remove("disabled");
        }
        if (positionScroll <= 0) {
            tabPrev.classList.add("disabled");
        }
    }
    tabList.addEventListener("wheel", debounceFn(function (event) {
        if (event.deltaY > 0) {
            iconNextClick();
        }
        else {
            iconPrevClick();
        }

        /// kiem tra khi scroll >= spacing thi hien thi tab-prev, nguoc lai thi an di
        // activeButton(this.scrollLeft, 1);
    }, 50));
    /// function kiem tra disable icon
    function activeButton(positionScroll, spacing) {
        /// kiem tra khi scroll >= spacing thi hien thi tab-prev, nguoc lai thi an di
        if (positionScroll >= spacing)
            tabPrev.classList.remove("disabled");
        else
            tabPrev.classList.add("disabled");
        /// kiem tra khi scroll <= maxScroll thi hien thi tab-next, nguoc lai thi an di
        if (positionScroll < maxScroll)
            tabNext.classList.remove("disabled");
        else
            tabNext.classList.add("disabled");
    }
    /// debounceFn function 
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
})