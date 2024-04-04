// inject footer in page
const contentFooter = `
<!-- Footer Tablet and Desktop -->
<footer
    class="footer-d d-sm-flex d-none justify-content-center align-items-center flex-column w-100 mt-4 py-3 py-lg-4"
>
    <div
    class="footer-thumb d-flex justify-content-center align-items-center flex-column gap-3 gap-lg-4"
    >
    <img src="/src/assets/icon/icon-short.png" alt="short-icon" />
    <h1 class="footer-thumb-desc text-white">
        <span>WONDERFUL</span> YOGYAKARTA
    </h1>
    </div>
    <ul
    class="footer-thumb d-flex justify-content-center align-items-center w-100 ps-0 pb-4 border-bottom border-light"
    >
    <li>
        <a href="/" class="foot-nav-list">HOMEPAGE</a>
    </li>
    <li>
        <a href="/src/pages/culture.html" class="foot-nav-list">CULTURE</a>
    </li>
    <li>
        <a href="/src/pages/travel.html" class="foot-nav-list">TRAVEL</a>
    </li>
    <li>
        <a href="/src/pages/culinary.html" class="foot-nav-list">CULINARY</a>
    </li>
    </ul>
    <div
    class="footer-bot w-100 d-flex justify-content-between align-items-center pt-2 pt-lg-3"
    >
    <div
        class="copyright-d d-flex justify-content-center align-items-center"
    >
        @Copyright 2024 TechTitans - WDC UNISNU 2024
    </div>
    <div
        class="social-media d-flex justify-content-center align-items-center gap-3 gap-lg-4"
    >
        <a href="https://instagram.com/tim_techtitans" target="_blank">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a
        href="https://www.facebook.com/people/Tech-Titans/61556895187086"
        target="_blank"
        >
        <i class="fa-brands fa-facebook"></i>
        </a>
        <a
        href="https://www.youtube.com/channel/UCDHjdGU4sZg3sA35-iagQkA"
        target="_blank"
        >
        <i class="fa-brands fa-youtube"></i>
        </a>
    </div>
    </div>
</footer>

<!-- Footer Mobile -->
<footer
    class="footer-m d-flex d-sm-none justify-content-center align-items-center flex-column gap-4 px-4 pt-4 w-100"
>
<div class="d-flex justify-content-between align-items-center w-100">
  <img
    src="/src/assets/icon/icon-short.png"
    alt="icon-short"
    style="width: 65px"
  />
  <div class="d-flex justify-content-center flex-column gap-2">
    <div
      class="list-nav-m d-flex justify-content-center align-items-center gap-2"
    >
      <a href="/">HOMEPAGE</a>
      <a href="/src/pages/culture.html">CULTURE</a>
      <a href="/src/pages/travel.html">TRAVEL</a>
      <a href="/src/pages/culinary.html">CULINARY</a>
    </div>

    <div class="social-media-m d-flex align-items-center gap-3">
      <a href="https://instagram.com/tim_techtitans" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com/people/Tech-Titans/61556895187086"
        target="_blank"
      >
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UCDHjdGU4sZg3sA35-iagQkA"
        target="_blank"
      >
        <i class="fa-brands fa-youtube"></i>
      </a>
    </div>
  </div>
</div>
<div
  class="w-100 copyright-m d-flex justify-content-center align-items-center py-2 border-top border-light"
>
  @Copyright 2024 TechTitans - WDC UNISNU 2024
</div>
</footer>
`;
injectElm("section.footer", contentFooter);

// inject tools in page
const contentTools = `
<!-- Button back to top and backsound button -->
<div class="wrapper-sidebtn">
<div class="button-backtop">
    <i class="fa-solid fa-arrow-up"></i>
</div>
<div class="backsound-btn">
    <i id="backsound-ic" class="fa-solid fa-volume-xmark"></i>
</div>
</div>

<!-- Loading Screen -->
<div class="loading-container">
<img src="/src/assets/icon/icon-short.png" alt="icon-short" />
<div class="loading-screen"></div>
</div>
`;
injectElm("section.tools", contentTools);

$("document").ready(function () {
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
      $("#backsound-ic").attr("class", "fa-solid fa-volume-high");
      audio.play(); // Stop the sound
      counter = 2;
    } else {
      $("#backsound-ic").attr("class", "fa-solid fa-volume-xmark");
      audio.pause(); // Pause the sound
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
});

// inject navbar
function injectNavbar(menuActive) {
  return $("#navbar").html(`
    <div class="container-fluid d-flex justify-content-start gap-5">
            <a class="navbar-brand" href="/">
              <img class="jogja-icon" src="/src/assets/icon/icon.png" alt="icon" />
            </a>
            <button
              style="
                border: none !important;
                outline: none !important;
                box-shadow: none !important;
                color: #fff;
              "
              class="navbar-toggler ms-auto d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="fs-2">
                <i class="bi bi-list"></i>
              </span>
            </button>
            <ul
              class="navbar-nav d-lg-flex d-none justify-content-center align-items-center flex-row gap-5"
            >
              <li class="nav-item">
                <a class="nav-link ${
                  menuActive === "home" ? "active" : ""
                }" href="/">Homepage</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${
                  menuActive === "culture" ? "active" : ""
                }" href="/src/pages/culture.html">Culture</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${
                  menuActive === "travel" ? "active" : ""
                }" href="/src/pages/travel.html">Travel</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${
                  menuActive === "culinary" ? "active" : ""
                }" href="/src/pages/culinary.html">Culinary</a>
              </li>
            </ul>
            <div
              class="offcanvas offcanvas-end bg-white"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <div class="offcanvas-title" id="offcanvasNavbarLabel">
                  <img
                    class="jogja-icon"
                    src="/src/assets/icon/icon.png"
                    alt="icon"
                  />
                </div>
                <button
                  style="
                    border: none !important;
                    outline: none !important;
                    box-shadow: none !important;
                  "
                  type="button"
                  class="text-black bg-transparent ms-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link text-black ${
                      menuActive === "home" ? "active" : ""
                    }" href="/">Homepage</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-black ${
                      menuActive === "culture" ? "active" : ""
                    }" href="/src/pages/culture.html">Culture</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-black ${
                      menuActive === "travel" ? "active" : ""
                    }" href="/src/pages/travel.html">Travel</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-black ${
                      menuActive === "culinary" ? "active" : ""
                    }" href="/src/pages/culinary.html">Culinary</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    `);
}

// inject elemen
function injectElm(selector, content) {
  return $(selector).html(content);
}
