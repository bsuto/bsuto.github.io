var count = 0;

function checkNext() {
  if (count == images.length - 1) {
    document.getElementById('next').style.visibility = 'hidden';
  } else {
    document.getElementById('next').style.visibility = 'visible';
  }
}
function checkPrev() {
  if (count == 0) {
    document.getElementById('prev').style.visibility = 'hidden';
  } else {
    document.getElementById('prev').style.visibility = 'visible';
  }
}

function renderImg() {
  document.getElementById('bee').src = images[count][0] + '.jpg';
  document.getElementById('bee').onload = function(){
    document.getElementById('bee').alt = document.getElementById('caption').innerHTML = images[count][1];
    // history.replaceState(null, null, '#' + images[count][0]);
    document.getElementById('copyfield').value = 'https://bsuto.com/spotthebee/#' + images[count][0];
    checkNext();
    checkPrev();
  }
}

function goNext() {
  count++;
  renderImg();
}
function goPrev() {
  count--;
  renderImg();
}
document.onkeydown = function(ev) {
  var key;
  ev = ev || event;
  key = ev.keyCode;
  if (key == 37 && count > 0) {
    goPrev();
  } else if (key == 39 && count < images.length - 1) {
    goNext();
  }
}
function copyLink() {
  document.getElementById('copyfield').select();
  document.execCommand('copy');
  document.getElementById('copyfield').blur();
}

function load() { 
  if (window.location.hash) {
    var hash = window.location.hash.substring(1); 
    for (var i = 0; i < images.length; i++) {
      if (images[i][0] == hash) { count = i; }
    }
  } else { count = 0; }
  renderImg();
}