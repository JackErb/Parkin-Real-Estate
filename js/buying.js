$(window).resize(function() {
  var video = $('#coeurdalene-video');
  console.log(video.width * 622 / 1110);
  video.height(video.width * 622 / 1110 * video.width());
});
