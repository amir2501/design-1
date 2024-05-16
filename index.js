var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  let width = screen.width;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("img").style.width = "80vw";
  } else {
    document.getElementById("img").style.width = "100vw";
    if (width > 800) {
      document.getElementById("absolute").style.position = "relative";
      document.getElementById("absolute").style.left = "0px";
    }
  }
  prevScrollpos = currentScrollPos;
};

document.querySelector("nav input").onclick = function () {
  if (this.checked) this.setAttribute("aria-expanded", true);
  else this.setAttribute("aria-expanded", false);
};
