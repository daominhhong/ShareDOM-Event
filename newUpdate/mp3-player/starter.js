window.addEventListener("load", function () {
    const playerImage = document.querySelector(".player-image");
    const progressBar = document.querySelector("#progress-bar");
    const playerDuration = document.querySelector(".player-duration");
    const playerRemaining = document.querySelector(".player-remaining");
    const prevBtn = document.querySelector(".player-prev");
    const playBtn = document.querySelector(".player-play");
    const nextBtn = document.querySelector(".player-next");
    const song = document.querySelector("#song");
    const listSong = ["holo.mp3", "home.mp3", "spark.mp3", "summer.mp3"];
    let songIndex = 0;

    let playing = true;
    playBtn.addEventListener("click", handlePlayMusic);
    nextBtn.addEventListener("click", function () {
        handleChangeMusic(1);
    });

    prevBtn.addEventListener("click", function () {
        handleChangeMusic(-1);
    });

    song.addEventListener("ended", function () {
        handleChangeMusic(1);
    });

    function handleChangeMusic(direction) {
        if (isNaN(direction)) return;
        if (direction > 0) {
            /// next music
            songIndex++;
            if (songIndex > listSong.length - 1)
                songIndex = 0;
        } else {
            /// prev music
            songIndex--;
            if (songIndex < 0)
                songIndex = listSong.length - 1;
        }
        song.setAttribute("src", `./files/${listSong[songIndex]}`);
        playing = true;
        handlePlayMusic();
    }

    function handlePlayMusic() {
        if (playing) {
            song.play();
            playing = false;
            playerImage.classList.add("is-playing");
            playBtn.classList.add("fa-pause")
        } else {
            song.pause();
            playing = true;
            playerImage.classList.remove("is-playing");
            playBtn.classList.remove("fa-pause")
        }
    }

    function displayTimer() {
        const { duration, currentTime } = song;
        progressBar.max = duration;
        progressBar.value = currentTime;
        playerDuration.textContent = changeTime(duration);

        playerRemaining.textContent = changeTime(currentTime);
    }
    progressBar.addEventListener("change", handleChangeProgressbar)
    function handleChangeProgressbar() {
        song.currentTime = progressBar.value;
    }

    function changeTime(number) {
        if (isNaN(number)) return;
        number = Number.parseInt(number);
        let minutes = Math.floor(number / 60);
        let seconds = Math.ceil(number % 60);
        return `${minutes}:` + `0${seconds}`.slice(-2);
    }
    const timer = setInterval(displayTimer, 500);
})