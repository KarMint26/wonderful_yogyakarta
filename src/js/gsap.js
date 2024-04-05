gsap.registerPlugin(ScrollTrigger);

// About Section
gsap.from(".top-text-head", 1.2, {
  opacity: 0,
  x: 50,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".top-text-head",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".bot-text-head", 1.2, {
  opacity: 0,
  x: 50,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".top-text-head",
    start: "top 50%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".desc-about", 1.2, {
  opacity: 0,
  x: 50,
  delay: 1,
  scrollTrigger: {
    trigger: ".top-text-head",
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
  delay: 1.1,
  scrollTrigger: {
    trigger: ".desc-about",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

// Why Yogyakarta Section
gsap.from(".title-wy", 1.1, {
  opacity: 0,
  y: 150,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".title-wy",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".decor", 1.3, {
  opacity: 0,
  scale: 0,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".title-wy",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".why-yogyakarta-hero", 1.1, {
  opacity: 0,
  y: 150,
  delay: 1,
  scrollTrigger: {
    trigger: ".why-yogyakarta-hero",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from("#point-list-1", 1.1, {
  opacity: 0,
  x: -150,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#point-list-1",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from("#point-list-2", 1.1, {
  opacity: 0,
  x: -150,
  delay: 0.8,
  scrollTrigger: {
    trigger: "#point-list-1",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from("#point-list-3", 1.1, {
  opacity: 0,
  x: -150,
  delay: 1.1,
  scrollTrigger: {
    trigger: "#point-list-1",
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

// Travel, culture, culinary Section
gsap.from("section.hero h1", 1, {
  y: -200,
});
gsap.from("section.hero p.title-desc", 1.2, {
  y: 220,
  opacity: 0,
});
gsap.from("section.hero a.btn-primary", 1.4, {
  y: 250,
  opacity: 0,
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
  delay: 0.8,
  scrollTrigger: {
    trigger: ".testimoni-container",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

// Bento Grid
gsap.from(".title-destination", 1, {
  opacity: 0,
  y: 200,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".title-destination",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from(".bento-grid", 1.2, {
  opacity: 0,
  scale: 0,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".title-destination",
    start: "top 80%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

// Culture Overview
gsap.from("#culture_overview", 1.1, {
  opacity: 0,
  y: 200,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#culture_overview",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

// Culinary Overview
gsap.from("#culinary_overview", 1.1, {
  opacity: 0,
  y: 200,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#culinary_overview",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

// Specialty Snacks
gsap.from(".title-ss", 1.1, {
  opacity: 0,
  scale: 0,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".title-ss",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

gsap.from("#carouselSpecialtySnacks", 1.2, {
  opacity: 0,
  y: 200,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".title-ss",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});

// FAQ
gsap.from(".faq-hero", 1.1, {
  opacity: 0,
  y: 150,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".faq-hero",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".faq-title", 1.2, {
  opacity: 0,
  x: -150,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".faq-title",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".faq-desc", 1.2, {
  opacity: 0,
  x: -150,
  delay: 1,
  scrollTrigger: {
    trigger: ".faq-title",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
gsap.from(".accordion", 1.2, {
  opacity: 0,
  x: -150,
  delay: 1.2,
  scrollTrigger: {
    trigger: ".faq-title",
    start: "top 70%", // Mulai animasi saat elemen berada di tengah atas viewport
  },
});
