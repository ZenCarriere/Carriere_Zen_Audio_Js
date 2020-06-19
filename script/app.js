(() => {
	console.log('fired!');

	let audioControls = document.querySelectorAll(".controls"),
	audio = document.querySelector('audio');

	function playAudio() {
		audio.play();
	}

	function rewindAudio(){
		audio.pause();
		audio.currentTime = 0;
		debugger;
	}

	audioControls[0].addEventListener("click",playAudio);
	audioControls[1].addEventListener("click",rewindAudio);
});
