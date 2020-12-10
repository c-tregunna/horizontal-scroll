let i = 0;
let text = '< Developing Web Developer />';
let speed = 200;

function slideShow() {
  if (i < text.length) {
    document.getElementById('title').innerHTML += text.charAt(i);
    i++;
    setTimeout(slideShow, speed);
  }
}

slideShow()