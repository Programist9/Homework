// console.log("Hello, World!");
$(".nav-link").click(function (e) {
  $('.nav-link').removeClass('active')
  $('.tab-pane').removeClass('active').addClass('fade')

  const eventTarget = e.target;
  const targetSelector = $(eventTarget).data("target");
  $(targetSelector).removeClass('fade').addClass("active");
  $(this).addClass('active')
});
// $(".").click(function (event) {
//   $(".modal-wrapper").removeClass("active");
//   $(".modal-window").removeClass("active");
// });
