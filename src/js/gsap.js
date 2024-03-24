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
  delay: 0.5,
  scrollTrigger: top,
});
gsap.from(".bot-text-head", 1.2, {
  opacity: 0,
  x: -50,
  delay: 0.8,
  scrollTrigger: top,
});
gsap.from(".desc-about", 1.2, {
  opacity: 0,
  x: 50,
  delay: 1.1,
  scrollTrigger: top,
});
gsap.from(".img-maps", 1.4, {
  opacity: 0,
  y: 100,
  delay: 1,
  scrollTrigger: top,
});
gsap.from(".modal-btn-history", 1.5, {
  opacity: 0,
  scale: 0,
  delay: 0.8,
  scrollTrigger: top,
});
