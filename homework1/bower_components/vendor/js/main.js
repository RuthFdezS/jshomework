$(document).ready(function(){

	//Stop the video if HTML5 is not supported
	if(!document.createElement('video').canPlayType){
		$('#controls').hide();

		return;
	}

	var video = document.getElementById('my-video-player');

	//Adding font-awesome icons and running
	var iconPlay = $('#icon-play').addClass('fa fa-play');

	$('#play-control').bind('click', function() {
		
		if (video.paused) {
			video.play();
			$(iconPlay).removeClass('fa fa-play');
			$(this).addClass('fa fa-pause');

		} else if(video.play) {
			video.pause();
			$(this).removeClass('fa fa-pause');
			$(this).addClass('fa fa-play');
		}
	});

	//Progress bar
	$(video).bind('timeupdate', function(){
		var videoTime = (this.currentTime / this.duration) * 100;
		//Change the size of the progress bar
		$('#progress').css({ width: videoTime + "%" });		
	});

	//mute and unmute audio
	var iconVolumen = $('#icon-volume').addClass('fa fa-volume-up');
	// 
	//Setting the value of the video tag
	$(video).prop('mute', true);

	$('#volume-control').bind('click', function(){

		if( $(video).prop('muted') ){
			
			$(video).prop('muted', false);

		} else {
			
			$(video).prop('muted', true);
			
		}	
	
	});
	
});

//( $(video).prop('mute', false)