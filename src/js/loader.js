import anime from "animejs/lib/anime.es.js";

console.log(anime);
anime({
  targets: ".loader .circle",
  scale: [0, 1],
  delay: anime.stagger(100),
  duration: 500,
  direction: "alternate",
  loop: true,
  easing: "linear",
});
