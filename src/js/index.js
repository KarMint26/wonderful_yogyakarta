$(document).ready(function () {
  // Navbar Behavior
  $(window).scroll(function () {
    var $navbar = $("#navbar");
    $navbar.toggleClass("scrolled", $(this).scrollTop() > $navbar.height());
    if ($(this).scrollTop() > $navbar.height()) {
      $(".nav-link").css("color", "#000");
      $(".navbar-toggler").css("color", "#000");
    } else {
      $(".nav-link").css("color", "#fff");
      $(".navbar-toggler").css("color", "#fff");
    }
  });

  // Carousel Behavior
  let nextDom = $("#next");
  let prevDom = $("#prev");
  let carouselDom = $(".carousel");
  let SliderDom = carouselDom.find(".list");
  let thumbnailBorderDom = $(".carousel .thumbnail");
  let thumbnailItemsDom = thumbnailBorderDom.find(".item");
  let timeDom = $(".carousel .time");

  thumbnailBorderDom.append(thumbnailItemsDom.first());
  let timeRunning = 3000;
  let timeAutoNext = 7000;

  // Event handlers for next and prev buttons
  nextDom.click(function () {
    showSlider("next");
  });

  prevDom.click(function () {
    showSlider("prev");
  });

  let runTimeOut;
  let runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);

  function showSlider(type) {
    let SliderItemsDom = SliderDom.find(".item");
    let thumbnailItemsDom = $(".carousel .thumbnail .item");

    if (type === "next") {
      SliderDom.append(SliderItemsDom.first());
      thumbnailBorderDom.append(thumbnailItemsDom.first());
      carouselDom.addClass("next");
    } else {
      SliderDom.prepend(SliderItemsDom.last());
      thumbnailBorderDom.prepend(thumbnailItemsDom.last());
      carouselDom.addClass("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.removeClass("next prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
  }
});
