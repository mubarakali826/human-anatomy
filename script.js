function showImage(id) {

    document.getElementById("imageContainer"+id).classList.add("show");
    document.getElementById("boo").classList.add("color"+id);
  }



  
  function hideImage(id) {
    
    document.getElementById("imageContainer"+id).classList.remove("show");
    document.getElementById("boo").classList.remove("color"+id);

  
  }

  

  // for adding heart beat 
var heartbeatAudio = document.getElementById('heartbeat');
var heartDiv = document.getElementById('heart');

heartDiv.addEventListener('mouseenter', function() {
  heartbeatAudio.currentTime = 0; // Start the audio from the beginning
  heartbeatAudio.play();
});

heartDiv.addEventListener('mouseleave', function() {
  heartbeatAudio.pause();
  heartbeatAudio.currentTime = 0;
});

// to  open new pages for each organ 

document.getElementById('heart').addEventListener('click', function() {
  window.open('heart.html');
});

document.getElementById('lung1').addEventListener('click', function() {
  window.open('lungs.html');
});

document.getElementById('lung2').addEventListener('click', function() {
  window.open('lungs.html');
});
document.getElementById('liver').addEventListener('click', function() {
  window.open('liver.html');
});
document.getElementById('gallbladder').addEventListener('click', function() {
  window.open('gallblader.html');
});
document.getElementById('pancreas').addEventListener('click', function() {
  window.open('pancreas.html');
});
document.getElementById('stomach').addEventListener('click', function() {
  window.open('stomach.html');
});
document.getElementById('stomach2').addEventListener('click', function() {
  window.open('stomach.html');
});
document.getElementById('kidney').addEventListener('click', function() {
  window.open('kidney.html');
});
document.getElementById('smallintestine').addEventListener('click', function() {
  window.open('smallintestine.html');
});
document.getElementById('largeintestine').addEventListener('click', function() {
  window.open('largeintestine.html');
});
document.getElementById('largeintestine1').addEventListener('click', function() {
  window.open('largeintestine.html');
});
document.getElementById('largeintestine2').addEventListener('click', function() {
  window.open('largeintestine.html');
});

