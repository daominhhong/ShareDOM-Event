window.addEventListener("load", function () {
    const tabItems = document.querySelectorAll(".tab-item");
    // console.log(tabItems);
    [...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
    const tabList = document.querySelector(".tab-list");
    const tabListLeft = tabList.offsetLeft;
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
        /// scrollMin la khoang cach toi thieu de bat dau scroll
        /// scrollMin phai lon hon do rong cua 2 phan tu dau tien
        const scrollMin = 100;
        if (scrollRight < scrollMin) scrollRight = 0;
        if (scrollRight >= 0)
            tabList.scroll(scrollRight, 0);
    }
})