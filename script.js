// const hello_world = "Hello, World!";
// const number_test = 1;
// console.log(hello_world);
// console.log(number_test);
// console.log(hello_world, number_test);
//
const dropdownItems = document.querySelectorAll(".dropdown");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
