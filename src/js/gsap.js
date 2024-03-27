gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar-brand", 1, {
  y: -100,
  delay: 0.2,
});
gsap.from(".navbar-nav", 0.8, {
  scale: 0,
  delay: 0.3,
});
gsap.from(".top-text-head", 1.2, {
  opacity: 0,
  x: 50,
  scrollTrigger: {
    trigger: ".top-text-head",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".bot-text-head", 1.2, {
  opacity: 0,
  x: -50,
  scrollTrigger: {
    trigger: ".bot-text-head",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".desc-about", 1.2, {
  opacity: 0,
  x: 50,
  scrollTrigger: {
    trigger: ".desc-about",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".img-maps", 1.4, {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".img-maps",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".modal-btn-history", 1.2, {
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".modal-btn-history",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

// Hotels Section
gsap.from(".hotels-head", 0.9, {
  opacity: 0,
  x: -100,
  scrollTrigger: {
    trigger: ".hotels-head",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".hotels-title", 1, {
  opacity: 0,
  x: -100,
  scrollTrigger: {
    trigger: ".hotels-title",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".hotels-location", 1.1, {
  opacity: 0,
  x: -100,
  scrollTrigger: {
    trigger: ".hotels-location",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".navigation-carousel", 1.2, {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: ".navigation-carousel",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".carousel-container", 1.2, {
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".carousel-container",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".title-testimoni", 1.3, {
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".title-testimoni",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".testimoni-container", 1.2, {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".testimoni-container",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});