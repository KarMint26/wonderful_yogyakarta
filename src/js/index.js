$(document).ready(function () {
  // Dark Mode Feature
  let theme = localStorage.getItem("theme") || "dark";

  // Function to toggle dark mode
  function toggleDarkMode() {
    theme = theme === "dark" ? "light" : "dark";
    if (theme === "dark") {
      $("html").attr("data-bs-theme", "dark");
      $("#toggleIcon").attr("class", "fa-solid fa-moon");
      localStorage.setItem("theme", "dark");
    } else {
      $("html").attr("data-bs-theme", "light");
      $("#toggleIcon").attr("class", "fa-solid fa-sun");
      localStorage.setItem("theme", "light");
    }
  }

  // Click event listener for toggling dark mode
  $("#toggleDark").click(toggleDarkMode);

  // Apply theme on page load
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    $("html").attr("data-bs-theme", "dark");
    $("#toggleIcon").attr("class", "fa-solid fa-moon");
  } else {
    $("html").attr("data-bs-theme", "light");
    $("#toggleIcon").attr("class", "fa-solid fa-sun");
  }

  // Update localStorage when user explicitly chooses light mode
  $("#lightMode").click(function () {
    localStorage.setItem("theme", "light");
    toggleDarkMode();
  });

  // Update localStorage when user explicitly chooses dark mode
  $("#darkMode").click(function () {
    localStorage.setItem("theme", "dark");
    toggleDarkMode();
  });

  // Remove theme preference from localStorage when user chooses to respect OS preference
  $("#autoMode").click(function () {
    localStorage.removeItem("theme");
    toggleDarkMode();
  });
});
