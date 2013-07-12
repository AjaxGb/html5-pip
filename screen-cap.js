var video,
		canvas,
		context,
		w, h, ratio;

video = document.getElementById('active');
canvas = document.querySelector('canvas');
canvas = document.getElementById('targetVideoCap');
context = canvas.getContext('2d');

video.addEventListener('loadedmetadata', function(){
ratio = video.videoWidth / video.videoHeight;
w = 400;
h = parseInt(w / ratio, 10);
canvas.width = w;
canvas.height = h;
console.log(ratio + ', ' + w + ', ' + h +' ');
console.log('During Event Listenter');
}, false);

console.log('After Event Listenter');

function snap(){
	context.fillRect(0, 0, w, h);
	context.drawImage(video, 0, 0, w, h);
}