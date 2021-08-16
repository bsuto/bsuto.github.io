var count = 0;

function checkNext() {
  if (count == pages.length - 1) {
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
  var pgNum = count + 1;

  document.getElementById('f1').src = 'images/' + pages[count][1] + '.gif';
  document.getElementById('f2').src = 'images/' + pages[count][2] + '.gif';
  document.getElementById('f3').src = 'images/' + pages[count][3] + '.gif';

  document.getElementById('author').innerHTML = pages[count][0];
  document.getElementById('permalink').href = '#' + pgNum;
  document.getElementById('pg').innerHTML = pgNum;
  checkNext();
  checkPrev();
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
  } else if (key == 39 && count < pages.length - 1) {
    goNext();
  }
}

function load() { 
  if (window.location.hash) {
    var page = window.location.hash.substring(1); 
    count = page - 1;
  }
  renderImg();
}