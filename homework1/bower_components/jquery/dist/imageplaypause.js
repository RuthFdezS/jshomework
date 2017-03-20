$(document).ready(function (){
$('#my-video-player').click(function() {
        this.paused ? this.play() : this.pause();
    });
});