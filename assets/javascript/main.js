var angryBirds = document.getElementById('angryBirdsVideo');

//  Change Angry birds to PUP
function doPictureInPicture(){
 angryBirds.setAttribute('class', 'pip');
 console.log('Angry Birds are now PIP');
} // doPictureInPicture()

function stopPictureInPicture(){
  angryBirds.removeAttribute('class');
  console.log('Angry Birds are now Full Screen');
} // stopPictureInPicture()
