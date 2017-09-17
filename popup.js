window.onload = function () {
    document.querySelector(".h5-ext-layer").remove();
    var videoWrapper = document.querySelector(".youku-film-player");
    var firstVideo = videoWrapper.querySelector("video");
    firstVideo.play();
    function playNext() {
        if (this.nextSibling) {
            this.nextSibling.play();
            this.nextSibling.onended = playNext;
        }
    }
    firstVideo.onended = playNext;
}
