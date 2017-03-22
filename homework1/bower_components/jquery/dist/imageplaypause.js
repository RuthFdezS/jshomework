$(document).ready(function (){
//$('#my-video-player').click(function() {
//        this.paused ? this.play() : this.pause();
//    });

 $('#my-video-player').click(function() { 
    if(this.paused){
		this.play(); 
		$('#icon-play').remove();
		$('#play-control').removeClass('fa fa-play');
		$('#play-control').addClass('fa fa-pause');
	} else if(this.play){
			this.pause(); 
			$('#icon-play').remove();
			$('#play-control').removeClass('fa fa-pause');
			$('#play-control').addClass('fa fa-play');
			
		}
	});	
});