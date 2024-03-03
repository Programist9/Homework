console.log("Hello, World!");

// const title = document.getElementById("mainTitle");

// console.log(title);

// window.console

// window.document

// window.$

// console.log({
//   window,
//   jQuery,
// });

// document

// console.log(typeof $);
// $("mainTitle");

// console.log($("#mainTitle"));
// $("p").each(function (idx, el) {
//   console.log(idx, el);

//   $(el).addClass("new");
// });

// $("#handler").click(function (e) {
//   console.log(e);
//   //   $(".wrap").show();
//   //   setTimeout(() => $(".wrap").hide(), 3000);
//   $(".wrap").slideToggle();
// });
// e = event
$(".open-modal").click(function (e) {
  const eventTarget = e.target;
  eventTarget.dataset.target = eventTarget.dataset.target; //прикол
  const targetSelector = $(eventTarget).data("target");

  //   const targetElement = $(targetSelector);
  $(".modal-wrapper").addClass("active");
  $(targetSelector).addClass("active");
});
$(".modal-window .close, .modal-wrapper").click(function (event) {
  if (this === event.target) {
    $(".modal-wrapper").removeClass("active");
    $(".modal-window").removeClass("active");
  }
});
