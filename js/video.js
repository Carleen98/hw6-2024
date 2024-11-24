var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    document.querySelector("#volume").innerText = video.volume * 100 + "%";
    addEventListeners();
});

function addEventListeners() {
    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        document.querySelector("#volume").innerText = video.volume * 100 + "%";
    });
    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate = Math.max(0.1, video.playbackRate * 0.9);
        console.log("New speed: " + video.playbackRate.toFixed(2));
    });
    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate = Math.min(5.0, video.playbackRate / 0.9);
        console.log("New speed: " + video.playbackRate.toFixed(2));
    });
    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current time: " + video.currentTime.toFixed(2));
    });
    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.innerText = "Mute";
        } else {
            video.muted = true;
            this.innerText = "Unmute";
        }
        console.log("Muted: " + video.muted);
    });
    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.querySelector("#volume").innerText = video.volume * 100 + "%";
        console.log("Volume: " + video.volume.toFixed(2));
    });
    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
        console.log("Applied oldSchool style");
    });
    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
        console.log("Removed oldSchool style");
    });
}
