var angryBirds = document.getElementById('angryBirdsVideo');

//  Change Angry birds to PIP
function doPictureInPicture(){
 angryBirds.setAttribute('class', 'pip');
 console.log('Angry Birds are now PIP');
} // doPictureInPicture()

function stopPictureInPicture(){
  angryBirds.removeAttribute('class');
  console.log('Angry Birds are now Full Screen');
} // stopPictureInPicture()


var dragSrcEl = null;
function handleDragStart(e) {
	this.style.opacity = '1';


	dragSrcEl = this;

	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.innerHTML);
	console.log('Testing Drag Start');
}

function handleDragOver(e) {
	if(e.preventDefault){
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
	this.classList.add('over');
	console.log('Testing Drag Enter');
}

function handleDragLeave(e) {
	this.classList.remove('over');
	console.log('Testing Drag Leave');
}

function handleDrop(e) {

	if(e.stopPropagation) {
		e.stopPropagation();
	}

	if(dragSrcEl != this) {
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
	}

	return false;

}

function handleDragEnd(e) {
	[].forEach.call(dzs, function(dz){
		dz.classList.remove('over');
	});
	console.log('Testing Drag End');
}


var cols = document.querySelectorAll('#videoContainer #dnd');
[].forEach.call(cols, function(col) {
	col.addEventListener('dragstart', handleDragStart, false);
	col.addEventListener('drop', handleDrop, false);
	col.addEventListener('dragend', handleDragEnd, false);
});

var dzs = document.querySelectorAll('#dropZones .upperRight');
[].forEach.call(dzs, function(dz){
	dz.addEventListener('dragenter', handleDragEnter, false);
	dz.addEventListener('dragover', handleDragOver, false);
	dz.addEventListener('dragleave', handleDragLeave, false);
});




