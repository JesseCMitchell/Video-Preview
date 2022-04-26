console.log("page loaded...");

function playVideo(myVideo) {
  myVideo.play();
}

function pauseVideo(myVideo) {
  myVideo.pause();
  myVideo.currentTime = 0;
}
