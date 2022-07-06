var slideImg = document.getElementById("slideImg");

var images = new Array(
  "images/Artp2.jpg",
  "images/Artp1.jpg",
  "images/Artp3.jpeg",
  "images/Artp4.jpeg"
);

var len = images.length;
var i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout("slider()", 3000);
}