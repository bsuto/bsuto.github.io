var images = [
['giving_birth','I made a mistake giving birth.'],
['deleat','I need to deleat it'],
['takingoff','I WILL LIKE TO BE TAKING OFF'],
['trable','I have a trable'],
['offcourse','Offcourse I whent'],
['mand','are you mand ate me?'],
['mistakewich','I made a mistakewich'],
['clash','Hi, Facebook. We clash yet again.'],
['intemidates','this intemidates me'],
['wife','i need a wife'],
['lightening','A lightening hit my house and I loss my password.'],
['stress','Nothing is alright STRESS'],
['give-up','feal like give-up'],
['surmane','being an idiot I have miss spelt my surname'],
['facilities','Could you help me with allocating me a password which I can use in order to use the facilities of Facebook?'],
['giveitme','My password: give it me!'],
['sight','I am just learnign how to use this sight.'],
['troblems','HAVING TROBLEMS'],
['san_antonio','Q: What time were you born? A: San Antonio'],
['preposterous','This is preposterous! I did not sign up for this book.'],
['workes','IT WORKES!'],
['1660','my year is not 1938 but 1660'],
['mastack', 'I MADE A MASTACK'],
['trubble', 'Hav&rsquo;n trubble with language'],
['maked_hide', 'I MAKED HIDE FROM 2 DAYZ']
];

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
  document.getElementById('lolcat').src = images[count][0] + '.jpg';
  document.getElementById('lolcat').onload = function(){
    document.getElementById('lolcat').alt = images[count][1];
    history.replaceState(null, null, '#' + images[count][0]);
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

function load() { 
  if (window.location.hash) {
    var hash = window.location.hash.substring(1); 
    for (var i = 0; i < images.length; i++) {
      if (images[i][0] == hash) { count = i; }
    }
  } else { count = 0; }
  renderImg();
}