(() => {
  const headerElem = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      headerElem.classList.add("scroll-active");
    } else {
      headerElem.classList.remove("scroll-active");
    }
  });
})();
