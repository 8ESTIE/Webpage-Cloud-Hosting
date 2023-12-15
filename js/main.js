const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});

document.querySelector(".nav__brand").onclick = (event) => {
  event.stopPropagation();
};

const navLinks = document.querySelectorAll(".nav__item");
navLinks.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const linkURL = item.querySelector("a").getAttribute("href");
    window.location.href = linkURL;
  });
});
