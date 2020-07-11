import anime from "animejs/lib/anime.es.js";
import loaderTimeline from "./loader.js";

//window.addEventListener("load", () => {
//  let loader = document.getElementById("loader");
//
//  anime({
//    targets: loader,
//    opacity: [1, 0],
//    duration: 1000,
//  });
//  // Hide loader
//  //loader.style.display = "none";
//
//  // Stop animation
//  window["loaderTimeline"].pause();
//  window["loaderTimeline"] = null;
//});

let loader = document.getElementById("loader");
let firstSectionTimeline = anime.timeline({
  targets: loader,
  opacity: [1, 0],
  duration: 4000,
  delay: 2000,
  easing: "easeInQuad",
  complete: function () {
    loaderTimeline.pause();
  },
});

firstSectionTimeline.add({
  targets: "#first-section",
  opacity: [0, 1],
  duration: 4000,
});
//
//window["loaderTimeline"].pause();
