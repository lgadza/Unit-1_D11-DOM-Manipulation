const shopname = function () {
  document.getElementById("shopname").innerText = "Impuls Gaming Parlor";
};
shopname();
const pageBackground = function () {
  document.querySelector("html").style.backgroundColor =
    "rgba(213, 189, 181, 0.6)";
};
pageBackground();
const fakeAddress = function () {
  document.getElementById("address").innerHTML = `<div>
          <address>15135 Pumula South,</address>
          <address>Bulawayo,</address>
          <address>Zimbabwe, 15-333</address>
        </div>`;
};
fakeAddress();
const addClass = function () {
  const elem = document.querySelectorAll("a");
  elem.classList.add("amazon-link");
};
addClass();

visibleImg = function () {
  const img = document.getElementsByClassName(".img");
};
