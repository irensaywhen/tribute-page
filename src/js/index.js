import anime from "animejs/lib/anime.es.js";
import Timeline from "./timeline.js";

document.addEventListener("DOMContentLoaded", () => {
  // Wrap every letter in a span
  let textWrappers = Array.from(document.querySelectorAll(".text-wrapper"));

  textWrappers.forEach((textWrapper) => {
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  });
});

window.addEventListener("load", () => {
  // Initialize timeline
  const timeline = new Timeline();
  console.log(timeline);

  const loader = document.getElementById("loader");

  anime
    .timeline({
      easing: "linear",
    })
    .add({
      targets: loader,
      opacity: [1, 0],
      duration: 1000,
      complete: function () {
        loader.style.display = "none";
      },
    });
  // Appearance of the first section
  //.add(
  //  {
  //    targets: "#first-section .word-1",
  //    opacity: [0, 1],
  //    duration: 1500,
  //  },
  //  "+=1000"
  //)
  //.add({
  //  targets: "#first-section .word-2",
  //  opacity: [0, 1],
  //  duration: 1500,
  //})
  //.add({
  //  targets: "#first-section .word-3",
  //  opacity: [0, 1],
  //  duration: 1500,
  //})
  //.add({
  //  targets: ".description .letter",
  //  opacity: [0, 1],
  //  easing: "easeInOutQuad",
  //  duration: 100,
  //  delay: (el, i) => 80 * (i + 1),
  //})
  //.add({
  //  targets: "#first-section",
  //  paddingTop: ["35vh", "10vh"],
  //  duration: 1000,
  //})
  //.add(
  //  {
  //    targets: "#first-section .hero-image",
  //    opacity: [0, 1],
  //    duration: 1500,
  //  },
  //  "-=500"
  //)
  //.add({
  //  targets: ".image-caption .letter",
  //  opacity: [0, 1],
  //  easing: "easeInOutQuad",
  //  duration: 100,
  //  delay: (el, i) => 80 * (i + 1),
  //});
});
