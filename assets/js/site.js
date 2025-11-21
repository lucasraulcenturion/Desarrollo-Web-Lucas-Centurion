
/* Playlist Imperial: Solo un audio sonando a la vez */

document.addEventListener("DOMContentLoaded", function () {
    const audios = document.querySelectorAll("audio");

    audios.forEach((audio) => {
        audio.addEventListener("play", () => {
            audios.forEach((other) => {
                if (other !== audio) {
                    other.pause();
                    other.currentTime = 0;
                }
            });
        });
    });
});