var angryBirds = document.getElementById('angryBirdsVideo');


function doPictureInPicture(){
 angryBirds.setAttribute('class', 'pip');
 console.log('Angry Birds are now PIP');
}

function stopPictureInPicture(){
  angryBirds.removeAttribute('class');
  console.log('Angry Birds are now Full Screen');
}
