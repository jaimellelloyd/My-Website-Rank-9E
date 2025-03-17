$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky")
    } else {
      $(".navbar").removeClass("sticky")
    }
  })

  $(".menu a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault()
      var hash = this.hash

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500
      ) // 800ms for smooth scrolling
    }
  })

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active")
    $(".menu-btn img").toggleClass("active")
  })
})
