const dropdownItems = document.querySelectorAll(".dropdown");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
