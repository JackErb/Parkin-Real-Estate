$(window).resize(resizeVideos);

$(document).ready(resizeVideos);

function resizeVideos() {
  var video = $('#coeurdalene-video');
  video.height(video.width() * 622 / 1110);
}
