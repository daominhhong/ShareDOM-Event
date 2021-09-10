window.addEventListener("load", function () {
    const dayClass = document.querySelector(".days");
    const hourClass = document.querySelector(".hours");
    const minuteClass = document.querySelector(".minutes");
    const secondClass = document.querySelector(".seconds");
    // "Fri Sep 10 2021 00:00:00 GMT+0700 (Giờ Đông Dương)"
    // 1 minute =60s
    // 1 hour = 3600s
    // 1 day = 86400

    const endDate = (new Date("Fri Sep 10 2021 00:00:00 GMT+0700 (Giờ Đông Dương)")).getTime();
    let days = 0, hours = 0, minutes = 0, seconds = 0;
    function calcTime(endDate) {
        if (isNaN(endDate)) return;
        const now = new Date().getTime();
        /// time remaining calculate to seconds
        let timeRemaining = Math.floor((endDate - now) / 1000);
        if (timeRemaining > 0) {
            days = Math.floor(timeRemaining / 86400);
            timeRemaining = timeRemaining % 86400;
            hours = Math.floor(timeRemaining / 3600);
            timeRemaining = timeRemaining % 3600;
            minutes = Math.floor(timeRemaining / 60);
            timeRemaining = timeRemaining % 60;
            seconds = timeRemaining;
            dayClass.textContent = days;
            hourClass.textContent = `0${hours}`.slice(-2);
            minuteClass.textContent = `0${minutes}`.slice(-2);
            secondClass.textContent = `0${seconds}`.slice(-2);
        } else {
            return;
        }
    }
    const timer = setInterval(function () {
        calcTime(endDate);
    }, 1000);

    if ((endDate - (new Date().getTime())) < 0)
        this.clearInterval(timer);
})