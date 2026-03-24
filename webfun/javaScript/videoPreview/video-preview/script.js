console.log("page loaded...");

var video = document.getElementById("video");
video.addEventListener("mouseenter", function() {
    video.play();
});
video.addEventListener("mouseleave", function() {
    video.pause();
});

const container = document.getElementById('videoContainer');
const vid = document.getElementById('myVideo');

// Hover the container instead of the iframe
container.addEventListener('mouseenter', () => {
    vid.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});

container.addEventListener('mouseleave', () => {
    vid.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
});
