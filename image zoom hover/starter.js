window.addEventListener("load", () => {
    const imageWrapper = document.querySelector(".image-wrapper");
    const imageCover = document.querySelector(".image-cover");
    const image = document.querySelector(".image");
    const imageWrapperWidth = imageWrapper.offsetWidth;
    const imageWrapperHeight = imageWrapper.offsetHeight;
    // console.log(imageWrapperX, imageWrapperY);
    imageCover.addEventListener("mousemove", handleHover);
    function handleHover(event) {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        image.style = "width:auto;height:auto;max-height:unset;"
        let imageWidth = image.offsetWidth;
        let imageHeight = image.offsetHeight;
        // let spaceX = (imageWidth / 2 - imageWrapperX) * 2;
        // let spaceY = (imageHeight / 2 - imageWrapperY) * 2;
        // imageWidth = imageWidth + spaceX;
        // imageHeight = imageHeight + spaceY;
        // let ratioX = imageWidth / imageWrapperX / 2;
        // let ratioY = imageHeight / imageWrapperY / 2;
        // //////////////
        // do anh trong khu cover di chuyen tu left: 0 -> imageWidth - imageWrapperWidth
        // va top: 0 -> imageHeight - imageWrapperheight
        // nen ta can tinh ti le khi chuot dich chuyen trong khu voi do rong cua khung

        let ratioX = (imageWidth - imageWrapperWidth) / imageWrapperWidth;
        let ratioY = (imageHeight - imageWrapperHeight) / imageWrapperHeight;
        let x = (mouseX - imageWrapper.offsetLeft) * ratioX;
        let y = (mouseY - imageWrapper.offsetTop) * ratioY;
        //console.log(-ratioX, -ratioY);
        image.style = `left:${-x}px;top:${-y}px;width:auto;height:auto;max-height:unset;transform:none;`;
    }
    imageCover.addEventListener("mouseleave", () => image.style = "");
});