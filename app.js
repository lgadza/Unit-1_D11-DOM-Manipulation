document.getElementById("button").onclick = function () {
  document.getElementById("shopname").innerText = "Impuls Gaming Parlor";
};

document.getElementById("button2").onclick = function () {
  document.querySelector("html").style.backgroundColor =
    "rgba(213, 189, 181, 0.6)";
};
const fakeAddress = function () {
  document.getElementById("address").innerHTML = `<div>
          <address>15135 Pumula South,</address>
          <address>Bulawayo,</address>
          <address>Zimbabwe, 15-333</address>
        </div>`;
};
document.getElementById("change").onclick = function () {
  document.getElementById("address").innerHTML = `<div>
          <address>15135 Pumula South,</address>
          <address>Bulawayo,</address>
          <address>Zimbabwe, 15-333</address>
        </div>`;
};

// fakeAddress();
const addClass = function () {
  for (i = 0; i < a.length; i++) {
    const elem = document.querySelectorAll("a");
    elem.classList.add("amazon-link");
  }
};
addClass();

visibleImg = function () {
  const img = document.getElementsByClassName(".img");
};
