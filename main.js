let scrollToTop = document.querySelector(".up");
let dropdown = document.querySelector('.links > .icon');
let ul = document.querySelector('.links > ul');

dropdown.onclick = function () {
  ul.classList.toggle('active');
}
document.onclick = function (e) {
  if (e.target !== dropdown) {
    ul.classList.remove('active');
  }
}

window.onscroll = function () {
  window.scrollY >= 900
    ? scrollToTop.classList.add("show")
    : scrollToTop.classList.remove("show");
};

scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};