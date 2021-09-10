
function createNotification(title = "welcome to Notification") {
    const template = `<div class="noti">
    <img src="./images/photo.jpeg" alt="" class="noti-image" />
    <div class="noti-content">
    <h3 class="noti-title">${title}</h3>
    <p class="noti-desc">
    Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
    dolor sit amet consec
    </p>
    </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
const titleData = ["welcome to Notification", "Welcome to Javascript", "welcome to tutorial", "Today a good day", "My name is Evondev"];

let lastTitle = "";

const timer = setInterval(function () {
    const noti = document.querySelector(".noti");
    if (noti)
        noti.parentElement.removeChild(noti);
    const title = titleData[Math.floor(Math.random() * titleData.length)];
    if (lastTitle !== timer)
        createNotification(title);
    lastTitle = title;
    console.log(timer);
}, 8000);
