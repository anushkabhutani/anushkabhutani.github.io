
//cookie popup when site loads, localstorage to remember choice
window.onload = function () {
  if (!localStorage.getItem("cookieChoice")) {
    document.getElementById("cookie-popup").style.display = "flex";
  }
};

function acceptCookies() {
  localStorage.setItem("cookieChoice", "accepted");
  //hide popup after they click
  document.getElementById("cookie-popup").style.display = "none";
}

function rejectCookies() {
  localStorage.setItem("cookieChoice", "rejected");
  document.getElementById("cookie-popup").style.display = "none";
}
