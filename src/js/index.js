// set active navbar
injectNavbar("home");
$(document).ready(function () {
  // Carousel Behavior
  let nextDom = $("#next");
  let prevDom = $("#prev");
  let carouselDom = $(".carousel");
  let SliderDom = carouselDom.find(".list");
  let thumbnailBorderDom = $(".carousel .thumbnail");
  let thumbnailItemsDom = thumbnailBorderDom.find(".item");

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
  let runNextAuto = setTimeout(function () {
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
    runTimeOut = setTimeout(function () {
      carouselDom.removeClass("next prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(function () {
      nextDom.click();
    }, timeAutoNext);
  }

  // carousel
  var carouselContainer = $(".carousel-container");
  var prevArrow = $(".prev-arrow");
  var nextArrow = $(".next-arrow");

  prevArrow.on("click", function () {
    var currentScroll = carouselContainer.scrollLeft();
    carouselContainer.animate(
      {
        scrollLeft: currentScroll - carouselContainer.width(),
      },
      500
    ); // 500 adalah durasi animasi dalam milidetik
  });

  nextArrow.on("click", function () {
    var currentScroll = carouselContainer.scrollLeft();
    carouselContainer.animate(
      {
        scrollLeft: currentScroll + carouselContainer.width(),
      },
      500
    ); // 500 adalah durasi animasi dalam milidetik
  });

  // linked carousel card
  $("#carousel-1").click(() => {
    window.open(
      "https://www.tiket.com/hotel/indonesia/innside-by-melia-yogyakarta-108001534490367057?adult=1&room=1"
    );
  });
  $("#carousel-2").click(() => {
    window.open(
      "https://www.tiket.com/hotel/indonesia/merapi-merbabu-hotel-yogyakarta-510001665376232226?adult=1&room=1"
    );
  });
  $("#carousel-3").click(() => {
    window.open(
      "https://www.tiket.com/hotel/indonesia/melia-purosani-108001534490283896?adult=1&room=1"
    );
  });
  $("#carousel-4").click(() => {
    window.open(
      "https://www.tiket.com/hotel/indonesia/el-hotel-yogyakarta-malioboro-603001680073242229?adult=1&room=1"
    );
  });
  $("#carousel-5").click(() => {
    window.open(
      "https://www.tiket.com/hotel/indonesia/royal-ambarrukmo-yogyakarta-108001534490281925?adult=1&room=1"
    );
  });
  $("#carousel-6").click(() => {
    window.open(
      "https://www.tiket.com/hotel/indonesia/next-hotel-yogyakarta-505001652429738663?adult=1&room=1"
    );
  });
});
