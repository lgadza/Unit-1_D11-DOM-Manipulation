document.getElementById("button").onclick = function () {
  document.getElementById("shopname").innerText = "Impuls Gaming Parlor";
  document.getElementById("shopname").style.color = "rgba(255, 128, 82, 0.6)";
};

document.getElementById("button2").onclick = function () {
  document.querySelector("html").style.backgroundColor =
    "rgba(213, 189, 181, 0.6)";
};

document.getElementById("change").onclick = function () {
  document.getElementById("address").innerHTML = `<div>
          <address>15135 Pumula South,</address>
          <address>Bulawayo,</address>
          <address>Zimbabwe, 15-333</address>
        </div>`;
};

const addClass = function () {
  const elem = document.querySelectorAll("a");
  console.log(elem);
  for (i = 0; i < elem.length; i++) {
    elem[i].classList.add("amazon-link");
  }
};
// addClass();

visibleImg = function () {
  const img = document.querySelectorAll(".img");
  console.log(img);
  for (let i = 0; i < img.length; i++) {
    img[i].img[i].style.display = "none";
  }
};
// visibleImg();

const shopname = document.querySelector("#shopname");
shopname.classList.add("louis");
console.log(shopname);

const randomColor = function (elem, colorChange) {
  let element = document.querySelectorAll(".price");
  let color = function getRandColor() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
      color = "0" + color;
    }
    return "#" + color;
  };
  //   console.log(getRandColor());
  for (let i = 0; i < element.length; i++) {
    element[i].style.color = String(color);
  }
};
randomColor();
let color = function getRandColor() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
};
// console.log(getRandColor());
console.log(color());
