


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
windows.addEventListener("keypress", checkKeyPress);

function checkclick() {
  goToLocation('/feed');
}
windows.addEventListener('click', checkclick);