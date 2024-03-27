$(document).ready(function () {
  // PWA Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(function (res) {
        console.log("service worker registered");
      })
      .catch(function (err) {
        console.log("service worker not registered", err);
      });
  }

  // Loading Screen Behavior
  var images = $("img");
  var loadedImages = 0;

  images.each(function () {
    $(this).on("load", function () {
      loadedImages++;
      if (loadedImages === images.length) {
        $(".loading-container").css("display", "none");
      }
    });
  });

  images.each(function () {
    if (this.complete) {
      $(this).trigger("load");
    }
  });

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

  // Button Back to top and Navbar
  function handleScroll() {
    if ($(window).scrollTop() > 30) {
      $(".nav-link").css("color", "#000");
      $(".navbar-toggler").css("color", "#000");
      $("#navbar").css("backgroundColor", "#fff");
    } else {
      $(".nav-link").css("color", "#fff");
      $(".navbar-toggler").css("color", "#fff");
      $("#navbar").css("backgroundColor", "transparent");
    }

    if ($(window).scrollTop() > 30) {
      $(".button-backtop").css("display", "block");
    } else {
      $(".button-backtop").css("display", "none");
    }
  }

  handleScroll();

  $(window).on("scroll resize load", handleScroll);

  var counter = 1;
  var audio = new Audio("/src/assets/sound/backsound.mp3");
  
  audio.volume = 0.3;
  audio.loop = true;

  $(".backsound-btn").click(function () {
    if (counter === 1) {
      $("#backsound-ic").attr("class", "fa-solid fa-volume-xmark");
      audio.play(); // Play the sound
      counter = 2;
    } else {
      $("#backsound-ic").attr("class", "fa-solid fa-volume-high");
      audio.pause(); // Stop the sound
      counter = 1;
    }
  });

  $(".button-backtop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "smooth"
    );
  });

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
