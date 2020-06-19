(() => {
	console.log('fired!');

	let audioControls = document.querySelectorAll('.controls'),
	audio = document.querySelector('audio'),
	audioThumbs = document.querySelectorAll('.trackref')

	function loadAndPlay() {
		audio.src =`audio/${this.dataset.trackref}`;
		audio.load();

		playAudio();
	}

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

	for (thumb of audioThumbs) {
		thumb.addEventListener('click', loadAndPlay);
	}

	audio.addEventListener('ended', () =>  console.log('track ended'));

})();
